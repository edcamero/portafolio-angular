
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargado=false;
 productos:any[]=[];
 productosFil:any[]=[];
  constructor(private http:HttpClient) {
    this.cargarProductos();
   }
  

  private cargarProductos(){

    return new Promise((resolve,reject )=>{
      this.http.get('https://bd-portafolio-187fe.firebaseio.com/productos_idx.json').subscribe((resp:Producto[])=>{
        this.productos=resp;
        this.cargado=false;
        resolve();
        //console.log(resp)
    })
    
    });


  }


  public getProducto(id:string){
    return this.http.get(`https://bd-portafolio-187fe.firebaseio.com/productos/${id}.json`);
  }


  public buscarProducto(palabra:string){
    console.log('se entrado')
    if(this.productos.length===0){
      this.cargarProductos().then(()=>{
        this.filtrarProducto(palabra);
      })
      
    }else{
      this.filtrarProducto(palabra);
    }
    
   
    console.log(this.productosFil);
  }


  private filtrarProducto(termino:string){
    this.productosFil=[];
    termino=termino.toLocaleLowerCase();
    
    this.productos.forEach(prod=>{
      const titulo=prod.titulo;
      if( prod.categoria.indexOf(termino)>=0||titulo.indexOf(termino)>=0){
        this.productosFil.push(prod)
      }
    })
  }
}


