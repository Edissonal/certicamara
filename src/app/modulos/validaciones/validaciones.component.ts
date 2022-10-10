import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../servicios/componentes.service';
declare var window: any;

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent implements OnInit {



 estados:boolean=false;


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService) { 
                  

  }



  ngOnInit(): void {
/*implementacion de modals a servicio componentes*/
    this.componentesService.formModal = new window.bootstrap.Modal(
    
      document.getElementById('principal')
     );

     this.componentesService.acuerdos = new window.bootstrap.Modal(
    
      document.getElementById('acuerdos')
     );

     this.componentesService.acuerdos2 = new window.bootstrap.Modal(
    
      document.getElementById('acuerdos2')
     );

     this.componentesService.acuerdos3 = new window.bootstrap.Modal(
    
      document.getElementById('acuerdos3')
     );

     this.mostrarevento();
     

     
  }

/*implementacion eventos modal */
abrirmodal() {

  console.log('log abre');
  this.componentesService.abrirmodal();
}


mostrarevento(){
  let evento = this.componentesService.estados;

  if(evento){
    this.componentesService.abrirmodal();
    this.componentesService.estados = false;
  }
}

}
