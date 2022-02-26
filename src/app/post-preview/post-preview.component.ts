import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.sass']
})
export class PostPreviewComponent {
  @Input() title = '';
  @Input() shortText = '';
}
