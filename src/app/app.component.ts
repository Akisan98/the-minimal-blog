import { Component, OnInit } from '@angular/core';
import { BlogConfig } from './blog';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  config: BlogConfig | undefined;

  constructor(private configService: ConfigService) { }
  
  ngOnInit(): void {
    this.configService.getBlogConfig().then((config) => {
      this.config = config[0] as BlogConfig;
      console.log(config[0]);
    });
  }

  
  title = 'the-minimal-blog';
}
