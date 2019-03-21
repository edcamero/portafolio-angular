import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productoDes } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  producto:productoDes;
  id:string;

  constructor(private route:ActivatedRoute,public productoS:ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(
      parametros=>{
        this.productoS.getProducto(parametros['id']).subscribe(
          (productoRes:productoDes)=>{
            //console.log(productoRes)
            this.id=parametros["id"];
            this.producto=productoRes;
          }
        )
        
      }
    )
  }

}
