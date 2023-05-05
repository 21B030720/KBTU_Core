
import { Component, OnInit } from '@angular/core';
import { User } from '../models';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  template: `Message: {{message}}
  <child-component (messageEvent)="receiveMessage($event)"></child-component>`

})

export class MainPageComponent implements OnInit{
  allow: Boolean;
  constructor(){
    this.allow = User;
    
  }
  ngOnInit(): void {
    this.allow = User;
  }
  showButton(){
    this.allow = User;
  }
  receiveMessage($event: any){
    this.allow = $event;
  }

}
