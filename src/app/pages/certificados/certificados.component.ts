import { Component, OnInit } from '@angular/core';
import { CertificadosService } from 'src/app/services/certificados.service';


@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent implements OnInit {

  constructor(public certificadoS:CertificadosService) { }

  ngOnInit() {
  }

}
