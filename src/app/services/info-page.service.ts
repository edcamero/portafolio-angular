import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class InfoPageService {

  constructor(private http:HttpClient) {
    console.log("SE ha cargado la pagina");


   
    this.http.get('assets/data/data-pagina.json').subscribe(resp=>{
      console.log(resp['twitter']);
      
    });
   }
}
