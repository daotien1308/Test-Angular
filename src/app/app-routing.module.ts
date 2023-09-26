import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsearchComponent } from './author-search/author-search.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { DetailAuthorComponent } from './detail-author/detail-author.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'author',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'author',
    component: AuthorsearchComponent

  },
  {
    path: 'book/:id',
    component: DetailBookComponent
  },
  {
    path: 'authordetail/:id',
    component: DetailAuthorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
