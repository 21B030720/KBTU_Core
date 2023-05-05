import { Component } from '@angular/core';
import { DataLenta } from '../data-lenta';
import { ActivatedRoute } from '@angular/router';
import { ServiceLentaService } from '../service-lenta.service';
import { ParamMap } from '@angular/router';
import { Data1 } from '../data1';
import { datas } from '../data-lenta';
// import { DataLenta } from '../data-lenta';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {



  newAlbum: DataLenta;
  art: DataLenta;
  aa: DataLenta|undefined;
  loaded: boolean;
  constructor(private route: ActivatedRoute, private albumService: ServiceLentaService ){
    this.art={} as DataLenta;

    this.loaded = true;
    this.newAlbum = {} as DataLenta;
  }
  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('id'));
    // this.product = data1.find(product => product.id === productIdFromRoute);


    this.route.paramMap.subscribe((params: ParamMap) => {
      const artIdFromRoute = Number(params.get('id'));
      this.aa=datas.find(art => art.id === artIdFromRoute);
      this.art = this.aa?? {}as DataLenta;

      const id = Number(params.get('id'));
      this.loaded = true;

      //    !!!!!      FOR WORK WITH JSON UNCOMMENT TEXT BELLOW   !!!!!!! 

      /*
      this.albumService.getAlbum(id).subscribe((art: DataLenta) => {
        this.art = art;
        this.loaded = true;
      });*/
    } )
  }
  deleteAlbum(k: number){
    this.albumService.deleteAlbum(k).subscribe((art: DataLenta) => {
      console.log(art);
    })
  }
  changeAlbum(title: string, id: number, body: DataLenta){
    body = {
      // userId: body.userId,
      id: body.id,
      title: body.title,
      author:body.author,
      date:body.date,
      img:body.img,
      content:body.content,
      category:body.category,
      likes:body.likes,
    } as DataLenta;
    this.albumService.changeAlbum(id, body).subscribe((art: DataLenta) => {
      console.log(art);
    })
  }

  incLikes(){
    this.art.likes=this.art.likes+1;
    console.log(this.art.likes);
  }
}
