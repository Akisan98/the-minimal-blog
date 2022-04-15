import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MainPageComponent } from './features/components/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpandingImgComponent } from './shared/components/expanding-img/expanding-img.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalErrorHandler } from './core/handlers/global-error-handler';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PostService } from './core/services/post.service';
import { PostPageComponent } from './features/components/post-page/post-page.component';
import { PostPreviewComponent } from './features/components/post-preview/post-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PostPreviewComponent,
    MainPageComponent,
    PostPageComponent,
    ExpandingImgComponent,
    LoadingComponent,
    FooterComponent,
    NavbarComponent
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
      { scrollPositionRestoration: 'enabled' }, // Don't know why but disable is restore, enable is to start on top
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
