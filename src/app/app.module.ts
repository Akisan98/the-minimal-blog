import { ErrorHandler, NgModule } from '@angular/core';
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
import { LoadingComponent } from './loading/loading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalErrorHandler } from './error/global-error-handler';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PostPreviewComponent,
    MainPageComponent,
    PostPageComponent,
    ExpandingImgComponent,
    LoadingComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'preview', component: MainPageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'preview/:id', component: PostPageComponent},
      // {path: 'home', redirectTo: '', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
      
      ], 
      { scrollPositionRestoration: 'enabled' } // Don't know why but disable is restore, enable is to start on top
    ),
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    PostService,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
