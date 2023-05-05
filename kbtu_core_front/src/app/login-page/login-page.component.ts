import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { Arslan } from '../models';
import { MainPageComponent } from '../main-page/main-page.component';
import { Router } from '@angular/router';
import { DatabaseConnectionService } from '../database-connection.service';
import { AuthService } from '../auth.service';
import { ArmanService } from '../arman.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  signupUsers: any[] = [];

  signupObj: any = {
    username: '',
    password: '',
  };
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(private filterService: DatabaseConnectionService, private accService: ArmanService, private route: Router) {}

  ngOnInit(): void {
    const savedUsers = localStorage.getItem('signupUsers');
    if (savedUsers) {
      this.signupUsers = JSON.parse(savedUsers);
    }
  }

  onLogin() {
    debugger

    this.accService.onLogin(this.loginObj).subscribe((res: any) =>
    {
      debugger
      console.log('res', res);
      localStorage.setItem('token', res['access']);
      this.route.navigateByUrl('/');
      this.filterService.setAllowance(true);
    })
    
  }

  
}
