import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-posts';
import { PostService } from '../post.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  posts: BlogPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => this.posts = posts);
  }
}
