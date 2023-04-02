import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LentaComponent } from './lenta/lenta.component';
import { ArticleComponent } from './article/article.component';
// import {http}

const routes: Routes = [
  {path: 'lenta', component: LentaComponent},
  {path: 'lenta/:id', component: ArticleComponent},
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
