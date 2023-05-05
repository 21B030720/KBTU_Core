import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { LentaComponent } from './lenta/lenta.component';
import { ArticleComponent } from './article/article.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { CreatorComponent } from './creator/creator.component';
import {MatInputModule} from '@angular/material/input'
import { MatCardModule } from "@angular/material/card";
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomInterceptor } from './custom.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,

    // ContentListComponent,

    TopBarComponent,

  
    LentaComponent,
    ArticleComponent,
    MainPageComponent,
    CreatorComponent,
    SignUpComponent,
  ],
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
