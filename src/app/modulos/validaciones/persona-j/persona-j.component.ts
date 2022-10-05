import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

@Component({
  selector: 'app-persona-j',
  templateUrl: './persona-j.component.html',
  styleUrls: ['./persona-j.component.css']
})
export class PersonaJComponent implements OnInit {

formaForm!:FormGroup;
estados:boolean=false;


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService) { 
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                  numero:['',[Validators.required,Validators.minLength(4)]],
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
                
                });    
            }

  ngOnInit(): void {
    console.log('juridica');

}

camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}

/*implementacion eventos modal */
abrirmodal() {

  //if(this.evento){

  console.log('log abre');


//}
}



cerrarmodal() {
  // confirm or save something
  this.componentesService.cerrarModal();


  
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
