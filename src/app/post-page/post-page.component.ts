import {  
  Component, 
  ComponentFactoryResolver, 
  ComponentRef, 
  ElementRef, 
  EmbeddedViewRef, 
  OnInit, 
  ViewChildren, 
  ViewContainerRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BlogPost } from '../blog-post.model';
import { ExpandingImgComponent } from '../expanding-img/expanding-img.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  @ViewChildren("image") imagesRef!: ElementRef<HTMLImageElement>[];

  slug: string | undefined;
  blogPost: BlogPost | undefined;
  richText: string = '';
  options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (fields: any) => {
        return `<img #image src="${fields.data.target.fields.file.url}" 
                            height="${fields.data.target.fields.file.details.image.height}" 
                            width="${fields.data.target.fields.file.details.image.width}" 
                            alt="${fields.data.target.fields.description}">`
      },
    },
  };

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private viewContainerRef: ViewContainerRef, 
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    // Get Blog Post ID.
    this.activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
    });

    this.postService.getPostById(this.slug!)
      .then((post: any) => {
        this.blogPost = post

        // Parse Rich-Text.
        const rawRichTextField = this.blogPost?.post;
        this.richText = documentToHtmlString(rawRichTextField, this.options);

        // Render Rich-Text.
        const app = document.getElementById("rich-text-body");
        app!.innerHTML = this.richText;

        // Replace Image with Expandable once.
        this.replaceImages();
      });
  }

  /**
   * Replaces standard img tag with ExpandableImage Component
   */
  replaceImages() {
    var images = document.getElementsByTagName("img")

    for (let item of images) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(ExpandingImgComponent);
      const component: ComponentRef<ExpandingImgComponent> = this.viewContainerRef.createComponent(factory);
      component.instance.src = item.src;
      component.instance.height = item.height.toString();
      component.instance.width = item.width.toString();
      component.instance.alt = item.alt;

      const domElem = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      item.parentNode?.replaceChild(domElem, item)
    }
  }
}
