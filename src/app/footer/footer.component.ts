import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: string = '2022';

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    if (currentYear != 2022) {
      this.year = this.year + ` - ${currentYear}`
    }
  }
}
