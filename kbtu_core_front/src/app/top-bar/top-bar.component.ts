import { Component } from '@angular/core';

import { MatButton } from '@angular/material/button';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  faculties: Faculty[] |undefined;
  // data1s: Tutorial[] = [];
  // albums: DataLenta[] |undefined;
  constructor(private service: DatabaseService){
    this.loaded = true;
  }
  loaded: boolean;
  ngOnInit(): void {
    // this.albums = datas;
    //    !!!!!      FOR WORK WITH JSON UNCOMMENT TEXT BELLOW   !!!!!!! 
    this.getAlbums();
  }
  getAlbums(){
    this.loaded = false;
    this.service.getFaculties().subscribe((albums: Faculty[]) =>{
      this.faculties = albums;
    });
  }

}
