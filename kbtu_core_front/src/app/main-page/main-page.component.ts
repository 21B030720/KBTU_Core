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
  constructor(private filterService: DatabaseConnectionService){
    this.allow = false
  }
  ngOnInit(): void {
    this.filterService.selectedAllowance.subscribe((value) => {
      // console.log(value);
      this.allow = value
    });
  }
  showButton(){
    // this.allow = User;
  }
  receiveMessage($event: any){
    this.allow = $event;
  }
}
