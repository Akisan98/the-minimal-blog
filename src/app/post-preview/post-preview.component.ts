import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
  @Input() title = '';
  @Input() shortText = '';
  @Input() imagePath = '';
}
