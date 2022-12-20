import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentesService } from '../../../domain/servicios/componentes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 // @ViewChild('margen', { read: ElementRef, static:false }) margen: ElementRef;

  constructor(private compoente:ComponentesService) { }


  ngOnInit(): void {

    
  }

  /*mostrar modal manualmente desde servicio*/ 
mostrar(){
this.compoente.estados = true;

}

}
