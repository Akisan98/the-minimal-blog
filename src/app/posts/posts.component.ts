import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  constructor() { }

  smallScreen: boolean = false;
  posts: BlogPost[] = [
    {
      title: "test1"
    },
    {
      title: "test2"
    },
    {
      title: "test3"
    },
    {
      title: "test4"
    }
  ];
  oddNumberOfPosts: boolean = false;

  


  ngOnInit(): void {
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

  constructor(theName: string) {
    this.title = theName;
  }
}
