import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../../domain/servicios/componentes.service';
declare var window: any;

@Component({
  selector: 'app-certimail-home',
  templateUrl: './certimail-home.component.html',
  styleUrls: ['./certimail-home.component.css']
})
export class CertimailHomeComponent implements OnInit {

  constructor(private router:Router,
              private componentesService:ComponentesService) { }

  ngOnInit(): void {
  }



  /*cerra Modal*/ 
  abrirmodal() {

  this.componentesService.abrirmodal();  
  }

}
