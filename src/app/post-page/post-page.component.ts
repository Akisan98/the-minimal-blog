import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog-posts';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  id: number | undefined;
  blogPost: BlogPost | undefined;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      // let guid = params['guid'];
    
      console.log(`${this.id}`);
    });

    this.postService.postById(this.id!).subscribe((post) => this.blogPost = post);

    console.log(this.blogPost);
  }
}
