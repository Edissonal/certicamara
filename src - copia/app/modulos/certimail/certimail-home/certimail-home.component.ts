import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
declare var window: any;

@Component({
  selector: 'app-certimail-home',
  templateUrl: './certimail-home.component.html',
  styleUrls: ['./certimail-home.component.css']
})
export class CertimailHomeComponent implements OnInit {

  constructor(private router:Router,
              private ComponentesService:ComponentesService) { }

  formModal: any;
  //@ViewChild('exampleModal',{static: false} ) exampleModal: any;



  ngOnInit(): void {

    
      this.formModal = new window.bootstrap.Modal(
    document.getElementById('exampleModal')
  
  );


  console.log('cargada');

  }



  /*cerra Modal*/ 
  abrirmodal() {
    this.formModal.show();
    console.log(this.formModal);
    this.ComponentesService.cerrarModal(this.formModal);
   
   // this.router.navigate(['planes']);

   
  }


  cerrarmodal(estado:boolean) {
    console.log(estado);
    this.formModal.hide();
  }
  
}
