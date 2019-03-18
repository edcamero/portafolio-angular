
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 producto:any[]=[];
  constructor(private http:HttpClient) {
    this.cargarProductos();
   }
  

  private cargarProductos(){
    this.http.get('https://bd-portafolio-187fe.firebaseio.com/productos_idx.json').subscribe((resp:Producto[])=>{
            this.producto=resp;
            console.log(resp)
    });


  }

}

