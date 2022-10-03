import { Component, OnInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-certimail-home',
  templateUrl: './certimail-home.component.html',
  styleUrls: ['./certimail-home.component.css']
})
export class CertimailHomeComponent implements OnInit {

  constructor() { }

  formModal: any;



  ngOnInit(): void {

    
      this.formModal = new window.bootstrap.Modal(
    
    document.getElementById('exampleModal')
  
  );
   

  }



  /*cerra Modal*/ 
  abrirmodal() {
    this.formModal.show();



  }
/*
    cerrarmodal() {

    this.formModal.hide();
    console.log('cerrado');
  }
*/

/*valores(){
  this.formModal = this.evento;
}*/


  
}
