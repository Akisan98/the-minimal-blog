import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BlogConfig, BlogPost } from '../blog';
import { ConfigService } from '../config.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  posts: BlogPost[] | undefined;
  config: BlogConfig | undefined;

  constructor(
    private postService: PostService,
    private configService: ConfigService,
    private titleService: Title,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Get ViewType and Blog Post ID.
    var path = this.router.url;
    var viewType = path.substring(1, path.lastIndexOf("/"))

    this.configService.getBlogConfig(viewType == 'preview').then((config) => {
      this.config = config[0] as BlogConfig;

      const app = document.getElementById("title");
      app!.innerHTML = this.config.title;

      const app2 = document.getElementById("subText");
      app2!.innerHTML = this.config.heroSubtext;

      this.titleService.setTitle(this.config.pageName);

      if (document.documentElement.lang != 'en') {
        document.documentElement.lang = 'en'; 
      }
    });

    this.postService.getBlogPosts().then((posts) => {
      this.posts = posts;
    });
  }
}
