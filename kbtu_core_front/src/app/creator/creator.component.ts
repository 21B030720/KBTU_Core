import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseConnectionService } from '../database-connection.service';
import { contents } from 'contents';
// import logic.js
@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit{
  newHtml: string = "";
  image: string="";
  loginObj: any = {
    username: '',
    password: '',
  };

  art: any={
    title: "",
    imgUrl:"",
    //imgUrl:"https://www.simplilearn.com/ice9/free_resources_article_thumb/python-downloads.JPG",
    
    contentt:"",
  };
  art_out: any={
    title: "Your Title",
    imgUrl:"../../../assets/images/img.png",
    //imgUrl:"https://www.simplilearn.com/ice9/free_resources_article_thumb/python-downloads.JPG",
    
    contentt:"Article text",
  };

  constructor(private filterService: DatabaseConnectionService)
  {}
  ngOnInit(): void 
  {
    this.filterService.setAllowance(false);
    this.filterService.setReady(true);
  }
  ngOnDestroy(){
    this.filterService.setAllowance(true);
    this.filterService.setReady(false);
  }

  Add(){
    /*
    // remove if there is
    var deleting = document.getElementById(`blablabla`) as HTMLElement | null;
    deleting?.remove();
  
    // create
    var input = <HTMLInputElement>document.getElementById("input_1");
    var a = input?.value;
    var div1 = document.createElement('div');
    div1.id = `blablabla`;
    // div1.className = "div_4";*/
    this.art_out=this.art
    var div1 = document.getElementById("article-text");
    console.log(this.art.contentt)
    div1!.innerHTML = this.art.contentt;


  }
  onLogin() {}
}
