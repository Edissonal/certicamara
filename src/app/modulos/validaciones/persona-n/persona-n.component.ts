import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
declare var window: any;

@Component({
  selector: 'app-persona-n',
  templateUrl: './persona-n.component.html',
  styleUrls: ['./persona-n.component.css']
})
export class PersonaNComponent implements OnInit {



  formaForm!:FormGroup;
  estados:boolean=false;
  estados2:boolean=false;
  listas:boolean=true;
  rutasActivas:string;


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
              private activateRoute:ActivatedRoute) {
                
                /*validacion de campos validators*/
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                  numero:[0,[Validators.required,
                              Validators.min(999),
                              Validators.max(9999999999),
                              
                              ]],
                  nombres:['',[Validators.required,
                              Validators.minLength(3),
                              Validators.maxLength(60),
                              Validators.pattern("[a-zA-Z ]{2,254}")]],
                  apellidos:['',[Validators.required,
                                  Validators.minLength(3),
                                  Validators.maxLength(60),
                                  Validators.pattern("[a-zA-Z ]{2,254}")]],
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
                
                });    
                /*captura de rutas activas*/
                this.activateRoute.queryParams
                .subscribe((res:any)=>{
                this.rutasActivas = res.route;
                console.log(this.rutasActivas);

                });
            

            }

/* funcion para validacion de campos*/
camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}




ngOnInit(): void {
  console.log('natural');

                 

}



/*implementacion eventos modal */
cerrarmodal() {

    this.componentesService.cerrarModal();
  console.log('cierra');

  
}

/*ingreso y validacion de datos de formulario*/
ngsubmit() {
  
  if(this.formaForm.invalid){
   this.formaForm.markAllAsTouched();
   return;
  }
  console.log(this.formaForm.value);
  this.estados= true;



  setTimeout(() => {
    
    this.cerrarmodal();
    this.router.navigate([this.rutasActivas]);
    
    
  }, 2500);

}


/* estilos alertas */
validar(){

  return (this.estados) ? 'alert alert-light animate__animated animate__fadeIn animate__faster text-center ':'animate__animated animate__fadeOut';
}

negras(){

  return (this.estados2) ? 'alert-malo animate__animated animate__fadeIn animate__faster text-center':'animate__animated animate__fadeOut';
}

/*politicas de implementacion terminos y condiciones alertas*/

condiciones(){
  // let elemento = this.componentesService.acuerdos._element.id;
   this.componentesService.terminos();
   
 }
 
 condiciones1(){
 
   this.componentesService.terminos1();
 }
 
 condiciones2(){
 
   this.componentesService.terminos2();
 }
 
 
 
 }
 

