import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { APIError } from "./error/api.error";
import { BlogPost } from "./blog";

@Injectable({
  providedIn: 'root',
})
 
export class PostService {
  blogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) { }

  getBlogPosts(): Promise<BlogPost[]> {
    if (this.blogPosts.length == 0) {
      return this.http.get<any>('/.netlify/functions/posts').toPromise()
      .then((response) => {
        return response.map((post: any) => {
          console.log(post);
          
          var parsedPost = this.parseBlogPostResponse(post);
          this.blogPosts.push(parsedPost)
          
          return parsedPost;
        })
      })
      .catch((error) => {
        console.log(`Something when wrong, status: ${error.error.code}, message: ${error.error.userMessage}`)
        return error.error as APIError;
      })
    }

    return Promise.all(this.blogPosts);
  }

  async getPostById(slug: string, preview: boolean = false) {
    if (this.blogPosts.length == 0) {
      var url = '/.netlify/functions/post';
      if (preview) {
        url = '/.netlify/functions/post-preview';
      }

      var response = await this.http.post<any>(url, { slug: slug })
        .toPromise()
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((error) => {
          console.log(error);
          return error
        });
      console.log(response);
      
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
