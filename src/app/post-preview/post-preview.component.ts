import { Component, Input } from '@angular/core';
import { BlogImage, BlogPost } from '../blog-post.model';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
  @Input() blogPost: BlogPost | undefined;
}
