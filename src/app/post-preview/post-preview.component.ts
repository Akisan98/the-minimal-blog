import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
  @Input() blogPost: BlogPost | undefined;
}
