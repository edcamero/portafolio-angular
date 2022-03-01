import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificado } from '../interfaces/Certificado.interface';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
 certificados:Certificado[]=[];
 cargado=false;
  constructor(private http:HttpClient) { 
    this.cargarCertificados();
    
  }


  private cargarCertificados(){

    return new Promise((resolve,reject )=>{
      this.http.get('https://bd-portafolio-187fe.firebaseio.com/certificados.json').subscribe(resp=>{
        this.certificados=resp as Certificado[];
        this.cargado=false;
        //console.log(resp)
    })
    
    });


  }

  public getCertificado(id:string){
    return this.http.get(`https://bd-portafolio-187fe.firebaseio.com/certificados/${id}.json`);
    

  }
}
