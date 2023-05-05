
import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { DatabaseConnectionService } from '../database-connection.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  template: `Message: {{message}}
  <child-component (messageEvent)="receiveMessage($event)"></child-component>`

})

export class MainPageComponent implements OnInit{
  allow: Boolean;
  artReady:boolean;

  constructor(private filterService: DatabaseConnectionService){
    this.allow = false;
    this.artReady=true;
  }
  ngOnInit(): void {
    this.filterService.selectedAllowance.subscribe((value) => {
      // console.log(value);
      this.allow = value
    });
    this.filterService.selectedReady.subscribe((value) => {
      // console.log(value);
      this.artReady = value
    });
  }
  showButton(){
    // this.allow = User;
  }
  receiveMessage($event: any){
    this.allow = $event;
  }
  receiveMessageR($event: any){
    this.artReady = $event;
  }
}
