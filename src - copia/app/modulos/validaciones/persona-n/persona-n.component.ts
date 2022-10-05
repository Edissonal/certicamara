import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
//declare var window: any;

@Component({
  selector: 'app-persona-n',
  templateUrl: './persona-n.component.html',
  styleUrls: ['./persona-n.component.css']
})
export class PersonaNComponent implements OnInit {



  formaForm!:FormGroup;
  estados:boolean=false;
  formModal:any;



  constructor(private fb:FormBuilder,
              private router:Router,
              private ComponentesService:ComponentesService) { 
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                  numero:['',[Validators.required,Validators.minLength(4)]],
                  nombres:['',[Validators.required,Validators.minLength(4)]],
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
                
                });    


            
   /*   this.formModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal')
      
      );*/
    
            }

          /* get datos() {
              return this.ComponentesService.formModal;
            }

*/
camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}


/*implementacion eventos modal */

ngOnInit(): void {
  console.log('natural');

                 

}

abrirmodal() {

//this.ComponentesService.cerrarModal();

//}
}



cerrarmodal() {
  // confirm or save something
  this.formModal.hide();
  console.log('cierra');

  console.log(this.formModal);
 // this.estados = true;
 // this.onvalida.emit(this.estados);
//this.formModal.hide();
//console.log(this.formModal);

//this.datos.hide();
//this.formModal.hide();


  
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



natural(){
  this.router.navigateByUrl('certimail/juridica')
  console.log('ejecutado');
}

juridica(){
  this.router.navigate(['/certimail/juridica']);
}

}
