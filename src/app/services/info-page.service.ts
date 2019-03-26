import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';



@Injectable({
  providedIn: 'root'
})

export class InfoPageService {
  public info:InfoPagina={};
  cargada=false;
  equipo:any[]=[];

  constructor( private http: HttpClient ) {
  this.cargarInfo();
  this.cargarEquipo();
    
   }

   private cargarInfo(){
    console.log("SE ha cargado la pagina");

    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina)=>{
      this.cargada=true;
      this.info=resp;

       //console.log(resp['twitter']);
       //console.log(resp);
      
    });
   }


   private cargarEquipo(){
    this.http.get('https://bd-portafolio-187fe.firebaseio.com/equipo.json').subscribe((resp:any)=>{
      
      this.equipo=resp;
       //console.log(resp['twitter']);
       //console.log(resp);
      
    });
   }

   
}