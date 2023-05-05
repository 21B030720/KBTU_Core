import { Component } from '@angular/core';

import { MatButton } from '@angular/material/button';
import { MainPageComponent } from '../main-page/main-page.component';
import { Faculty, Tutorial } from '../models';
import { DatabaseService } from '../database.service';
import { DatabaseConnectionService } from '../database-connection.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  faculties: Faculty[] |undefined;
  filteredTuttorials: Tutorial[] = [];
  // data1s: Tutorial[] = [];
  // albums: DataLenta[] |undefined;
  constructor(private service: DatabaseService, private filterService: DatabaseConnectionService){
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
