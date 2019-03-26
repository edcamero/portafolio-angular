import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productoDes } from 'src/app/interfaces/producto-descripcion.interface';
import { CertificadosService } from 'src/app/services/certificados.service';
import { Certificado } from 'src/app/interfaces/Certificado.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  certificado:Certificado;
  id:string;

  constructor(private route:ActivatedRoute,public cert:CertificadosService) { }

  ngOnInit() {
    this.route.params.subscribe(
      parametros=>{
        this.cert.getCertificado(parametros['id']).subscribe(
          (cert_res:Certificado)=>{
            //console.log(productoRes)
            this.id=parametros["id"];
            this.certificado=cert_res;
          }
        )
        
      }
    )
  }

}
