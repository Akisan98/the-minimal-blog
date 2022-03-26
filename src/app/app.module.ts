import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostService } from './post.service';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpandingImgComponent } from './expanding-img/expanding-img.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PostPreviewComponent,
    MainPageComponent,
    PostPageComponent,
    ExpandingImgComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'preview/:id', component: PostPageComponent},
      // {path: 'home', redirectTo: '', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
