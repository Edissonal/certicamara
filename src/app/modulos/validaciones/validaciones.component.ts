import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent implements OnInit {


  formaForm!:FormGroup;
  estados:boolean=false;
@Input ()formModal:any;


  //formModal: any;

  constructor(private fb:FormBuilder,
              private router:Router) { 
                  
    this.formaForm = this.fb.group({
  tipo:['',[Validators.required]],
  numero:['',[Validators.required,Validators.minLength(4)]],
  nombres:['',[Validators.required,Validators.minLength(4)]],
  terminosp:['',[Validators.required]],
  terminost:['',[Validators.required]],
  terminostpro:['',[Validators.required]],

});



  }



  ngOnInit(): void {

   /* this.formModal = new window.bootstrap.Modal(
    
   //   document.getElementById('exampleModal')
    
    );*/


  }


  camposvalidos(campo:any){
      return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
  }

  
/*implementacion eventos modal */
abrirmodal() {

  //if(this.evento){
  this.formModal.show();
  console.log('log abre');
  console.log(this.formModal);

//}
}



cerrarmodal() {
  // confirm or save something
  this.formModal.hide();
  console.log('cierra');

  console.log(this.formModal);
  
}



  
  ngsubmit() {
  
    if(this.formaForm.invalid){
     this.formaForm.markAllAsTouched();
     return;
    }
    console.log(this.formaForm.value);
    this.estados= true;



    setTimeout(() => {
      
      this.cerrarmodal();
      this.router.navigate(['planes']);
      
    }, 2500);

  }






  validar(){

    return (this.estados) ? 'alert alert-light animate__animated animate__fadeIn animate__faster text-center ':'';
  }
  
  

}
