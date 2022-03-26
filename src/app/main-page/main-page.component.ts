import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  posts: BlogPost[] | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getBlogPosts().then((posts) => {
      this.posts = posts;
      console.log(posts)
    });
    
  }
}
