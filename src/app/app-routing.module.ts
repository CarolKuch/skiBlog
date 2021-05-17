import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'add', component: AddPostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
