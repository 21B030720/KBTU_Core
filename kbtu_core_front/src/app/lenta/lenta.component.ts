import { Component, OnInit } from '@angular/core';
import { DataLenta } from '../data-lenta';
import { ServiceLentaService } from '../service-lenta.service';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Params } from '@angular/router';
import {Location} from '@angular/common';
import { data1s } from '../data1';
import { DatabaseService } from '../database.service';
import { Tutorial, User } from '../models';
import { datas } from '../data-lenta';
import { MainPageComponent } from '../main-page/main-page.component';
import { Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lenta',
  templateUrl: './lenta.component.html',
  styleUrls: ['./lenta.component.css']
})
export class LentaComponent {
  newFilter: string;
  albums: Tutorial[] |undefined;
  // data1s: Tutorial[] = [];
  // albums: DataLenta[] |undefined;

  loaded: boolean;

  constructor(private service: DatabaseService){
    this.loaded = true;
    this.newFilter = "";
  }
  ngOnInit(): void {
    // this.albums = datas;
    //    !!!!!      FOR WORK WITH JSON UNCOMMENT TEXT BELLOW   !!!!!!! 
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.service.getTutorials().subscribe((albums: Tutorial[]) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }


  Search(){
    console.log(User);
    if(this.newFilter == "")
    {
      this.getAlbums();
    }
    else
    {
      this.loaded = false;
      this.service.getTutorials().subscribe((albums: Tutorial[]) =>{
        this.albums = [];
        for(var i in albums)
        {
          if(albums[i]['title'].search(this.newFilter) != -1)
          {
            this.albums.push(albums[i]);
          }
        }
        this.loaded = true;
      }); 
    }
  }

  

  
}
