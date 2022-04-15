import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/core/models/blog';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
  @Input() blogPost: BlogPost | undefined;

  wholeNumber(value: number) {
    return Math.round(value)
  }
}
