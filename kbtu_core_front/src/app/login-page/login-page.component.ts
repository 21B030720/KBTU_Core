import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { Arslan } from '../models';
import { MainPageComponent } from '../main-page/main-page.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  signupUsers: any[] = [];

  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(private _router: Router) {}

  ngOnInit(): void {
    const savedUsers = localStorage.getItem('signupUsers');
    if (savedUsers) {
      this.signupUsers = JSON.parse(savedUsers);
    }
  }

  onLogin() {
    // debugger
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('Welcome!');
      Arslan();
      this._router.navigate(['']);
    } else{
      alert('Not Welcome!')
    }
  }
}
