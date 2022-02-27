import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostPreviewComponent,
    PostsComponent,
    PostDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: MainComponent},
      {path: 'detail', component: PostDetailComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
