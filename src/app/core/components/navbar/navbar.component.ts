import { Component, Input } from '@angular/core';
import { BlogConfig } from '../../models/blog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() config: BlogConfig | undefined;
}
