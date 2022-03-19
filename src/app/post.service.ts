import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { BLOG_POSTS } from "./blog-posts";

@Injectable({
  providedIn: 'root',
})
 
export class PostService {
  getPosts() {
    return of(BLOG_POSTS);
  }

  postById(id: number) {
    return of(BLOG_POSTS.find((post) => post.id == id));
  }
}
