import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';



@Injectable({
  providedIn: 'root'
})

export class InfoPageService {
  info:InfoPagina={};
  cargada=false;

  constructor( private http: HttpClient ) {
  
    console.log("SE ha cargado la pagina");


   
    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina)=>{
      this.cargada=true;
      this.info=resp;
       //console.log(resp['twitter']);
       console.log(resp);
      
    });
   }
}
