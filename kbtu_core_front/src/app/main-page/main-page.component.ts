import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  template: `Message: {{message}}
  <child-component (messageEvent)="receiveMessage($event)"></child-component>`

})
export class MainPageComponent {

 
}
