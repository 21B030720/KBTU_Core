import { Component } from '@angular/core';
// import logic.js
@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent {
  Add(){
    // remove if there is
    var deleting = document.getElementById(`blablabla`) as HTMLElement | null;
    deleting?.remove();
  
    // create
    var input = <HTMLInputElement>document.getElementById("input_1");
    var a = input?.value;
    var div1 = document.createElement('div');
    div1.id = `blablabla`;
    // div1.className = "div_4";
    div1.innerHTML = a;
    var place = document.getElementById("div_out") as HTMLElement | null;
    place?.appendChild(div1);
  }
}
