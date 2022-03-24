import { AfterViewInit, Component, Directive, ElementRef, Input, ViewChildren } from '@angular/core';
import { NgZoom } from 'ng-zoom';

@Component({
  selector: 'app-expanding-img',
  templateUrl: './expanding-img.component.html',
  styleUrls: ['./expanding-img.component.scss']
})

export class ExpandingImgComponent implements AfterViewInit {
  @Input() src: string = '';
  @Input() alt: string = 'No Description of Image'
  @Input() height: string = "0";
  @Input() width: string = "0";

  constructor(private ngz: NgZoom) { }

  @ViewChildren("image")
  imagesRef!: ElementRef<HTMLImageElement>[];

  ngAfterViewInit() {
    this.imagesRef.forEach((imageRef: ElementRef<HTMLImageElement>) => {
      this.ngz.listen(imageRef);
    });
  }
}
