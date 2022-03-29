import { Component, OnInit } from '@angular/core';
import { BlogConfig, BlogPost } from './blog';
import { ConfigService } from './config.service';
import { PostService } from './post.service';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config: BlogConfig | undefined;
  posts: BlogPost[] | undefined;

  constructor(
    private postService: PostService,
    private configService: ConfigService,
    public toastService: ToastService
  ) {}
  
  ngOnInit(): void {
    // Preload as we will need them straight away,
    // this way we have a website wide loading screen 
    // till the necessary data is loaded.

    this.configService.getBlogConfig().then((config) => {
      this.config = config[0] as BlogConfig;

      if (this.config.navbarIcon) {
        const icon = document.getElementById("appIcon") as HTMLLinkElement;
        icon!.href = this.config.navbarIcon.file.url;
      }
    });

    this.postService.getBlogPosts().then((posts) => {
      this.posts = posts;
    });
  }
}
