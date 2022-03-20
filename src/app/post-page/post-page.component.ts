import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BlogPost } from '../blog-post.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  slug: string | undefined;
  blogPost: BlogPost | undefined;
  richText: string = '';

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
      console.log(`${this.slug}`);
    });

    await this.postService.getPostById(this.slug!).then((post) => {
      this.blogPost = post
      console.log(this.blogPost);
    });
    
    console.log(this.blogPost);


    // var json = await this.postService.getNewAPI();

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (fields: any) => {
          console.log(fields)
          return `<img style="width: 100%; height: auto; max-height: 75vh; object-fit: cover;" src="${fields.data.target.fields.file.url}" height="${fields.data.target.fields.file.details.image.height}" width="${fields.data.target.fields.file.details.image.width}" alt="${fields.data.target.fields.description}"/>`
        }
      }
    };

    const rawRichTextField = this.blogPost?.post;
    this.richText = documentToHtmlString(rawRichTextField, options);

    // // this.testAPI = JSON.stringify(rawRichTextField)

    const app = document.getElementById("rich-text-body");
    app!.innerHTML = this.richText;
  }


  // ngAfterViewInit(): void {
  //   const app = document.getElementById("rich-text-body");
  //   app!.innerHTML = this.richText;
  // }
}
