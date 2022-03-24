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

  async getBlogPosts() {
    if (this.blogPosts.length == 0) {
      var response = await this.http.get<any>('/.netlify/functions/posts').toPromise();
      return response.map((post: any) => {
        var parsedPost = this.parseBlogPostResponse(post);
        this.blogPosts.push(parsedPost)
        
        return parsedPost;
      })
    }

    return this.blogPosts;
  }

  async getPostById(slug: string) {
    if (this.blogPosts.length == 0) {
      var response = await this.http.post<any>('/.netlify/functions/post', { slug: slug }).toPromise();
      return this.parseBlogPostResponse(response);
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
