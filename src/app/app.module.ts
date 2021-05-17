import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PageNotFoundComponent,
    NavigationComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
