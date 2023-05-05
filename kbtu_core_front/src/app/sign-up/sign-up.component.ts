import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupUsers: any[] = [];
  
  signupObj: any = {
    username: '',
    password: '',
    imagelink: ''
  };

  constructor() { }

  ngOnInit(): void {
    const savedUsers = localStorage.getItem('signupUsers');
    if (savedUsers) {
      this.signupUsers = JSON.parse(savedUsers);
    }
  }

  onSignup() {
    const savedUsers = localStorage.getItem('signupUsers');
    let signupUsers = [];
    if (savedUsers) {
      signupUsers = JSON.parse(savedUsers);
    }
    signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(signupUsers));
    this.signupObj = {
      username: '',
      password: '',
      imagelink: ''
    };
  }  
}
