import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostService } from './post.service';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PostPreviewComponent,
    MainPageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'post/:id', component: PostPageComponent},
      // {path: 'home', redirectTo: '', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
