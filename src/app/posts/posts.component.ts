import { Component, HostListener, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  smallScreen: boolean = false;
  posts: BlogPost[] = [];
  oddNumberOfPosts: boolean = false;

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.smallScreen = window.innerWidth < 500 ? true : false
    this.oddNumberOfPosts = this.posts.length % 2 === 0 ? false : true;
  }

  @HostListener('window:resize', ['$event'])
  onResize() { //event
    this.smallScreen = window.innerWidth < 500 ? true : false
  }
}

export class BlogPost {
  title: string;
  shortText: string;
  longText: string;

  constructor(theName: string, short: string, long: string) {
    this.title = theName;
    this.shortText = short;
    this.longText = long;
  }
}
