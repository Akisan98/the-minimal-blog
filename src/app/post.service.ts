import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { BlogPost } from "./blog-post.model";
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
 
export class PostService {
  blogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) { }

  getNewAPI() {
    return fetch('/.netlify/functions/posts')
        .then((response) => response.json())
  }

  async getBlogPosts() {
    if (this.blogPosts.length == 0) {
      var t = await fetch('/.netlify/functions/posts')
      var t2 = t.json()
      var t3 = t2.then((posts) => {

        posts.forEach((post: any) => {
          var blogPost = {
            entityId: post.sys.id,
            title: post.fields.title,
            description: post.fields.description,
            post: post.fields.post,
            postImage: post.fields.postImage.fields.file,
            date: post.fields.date
          };

          this.blogPosts.push(blogPost);
        });
      });
    }

    return this.blogPosts;
  }

  async getPostById(slug: string) {
    // return of(this.blogPosts.find((post) => post.entityId == slug));

    if (this.blogPosts.length == 0) {
      var t = await this.http.post<any>('/.netlify/functions/post', { slug: slug }).toPromise();
      var t2 = this.parseBlogPostResponse(t);
      console.log(t2)
      return this.parseBlogPostResponse(t);
    }
    
    return this.blogPosts.find((post) => post.entityId == slug);
  }

  parseBlogPostResponse(post: any) {
    return {
      entityId: post.sys.id,
      title: post.fields.title,
      description: post.fields.description,
      post: post.fields.post,
      postImage: post.fields.postImage.fields.file,
      date: post.fields.date
    };
  }
}
