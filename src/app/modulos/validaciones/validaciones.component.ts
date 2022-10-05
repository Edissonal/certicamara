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

    this.componentesService.formModal = new window.bootstrap.Modal(
    
      document.getElementById('exampleModal')
     
     );

  }

/*implementacion eventos modal */
abrirmodal() {

  console.log('log abre');
  this.componentesService.abrirmodal();


}


}
