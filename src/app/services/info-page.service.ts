import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class InfoPageService {
  info:any={};
  cargada=false;

  constructor( private http: HttpClient ) {
  
    console.log("SE ha cargado la pagina");


   
    this.http.get('assets/data/data-pagina.json').subscribe(resp=>{
      this.cargada=true;
      this.info=resp;
       //console.log(resp['twitter']);
       console.log(resp);
      
    });
   }
}
