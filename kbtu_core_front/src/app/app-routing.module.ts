import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LentaComponent } from './lenta/lenta.component';
import { ArticleComponent } from './article/article.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreatorComponent } from './creator/creator.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
// import {http}

const routes: Routes = [
  {path: '', component: LentaComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'creator', component: CreatorComponent},
  {path: ':id', component: ArticleComponent}, 
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
