import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

@Component({
  selector: 'app-persona-j',
  templateUrl: './persona-j.component.html',
  styleUrls: ['./persona-j.component.css']
})
export class PersonaJComponent implements OnInit,AfterViewInit {


formaForm!:FormGroup;
estados:boolean=false;
estados2:boolean=false;
listas:boolean=true;
mostrar:boolean= false;
rutasActivas:string;

/*validacion de campos y validastors */
  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
              private activateRoute:ActivatedRoute
              ) { 
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                    numero:[0,[Validators.required,
                      Validators.min(999),
                      Validators.max(9999999999),
                    ]],
                    codigo:[],
                    razon:['',[Validators.required,
                      Validators.minLength(4),
                      Validators.maxLength(60),
                      Validators.pattern("[a-zA-Z ]{2,254}")]],
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
                
                },{validators:[this.componentesService.codigonit('tipo','codigo')]});   
                
                       /*captura de rutas activas*/
                       this.activateRoute.queryParams
                       .subscribe((res:any)=>{
                       this.rutasActivas = res.route;
                       console.log(this.rutasActivas);
       
                       });
                   
            }

  ngOnInit(): void {
    console.log('juridica');
    this.onChanges();
   

}

/* Validacion de campo codigo de verificacion*/

onChanges(){
  this.formaForm.valueChanges.subscribe(res=>{
    

    
   if(res.tipo =="NIT"){
      this.mostrar = true;
      console.log(this.mostrar);



    } else if(res.tipo =="Cédula de ciudadanía"){
     
      this.mostrar = false;
      console.log(this.mostrar);
    } else if(res.tipo =="Cédula de ciudadanía" &&  res.tipo == null){
     
      this.mostrar = true;
      console.log(this.mostrar);
    } 

  });

}


ngAfterViewInit() {
 
}
/*funcion para validacion de campos formularios*/

camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}

/*implementacion eventos modal */
abrirmodal() {


  console.log('log abre');

}

cerrarmodal() {
  this.componentesService.cerrarModal();


  
}

/**envio de datos y validacion de boton */
ngsubmit() {

  
  if(this.formaForm.invalid){
   this.formaForm.markAllAsTouched();
   console.log(this.formaForm);
   return;
  }
  console.log(this.formaForm.value);
  this.estados= true;



/**validaciones si la persona no digito el codigo de verificacion */
 console.log(this.mostrar);
  if(this.mostrar == true){
    let valoresfi:object = this.formaForm.value;
    console.log(valoresfi);
  }else if(this.mostrar == false){
    let {tipo,numero,razon,terminosp,terminost,terminostpro} = this.formaForm.value;
    let valores:object ={tipo,numero,razon,terminosp,terminost,terminostpro}
    console.log(valores);
  }


  setTimeout(() => {
    

   this.estados2= true;

    
  }, 2500);

}

/*alertas animaciones */
validar(){

  return (this.estados) ? 'alert alert-light animate__animated animate__fadeIn animate__faster text-center ':'animate__animated animate__fadeOut';
}

negras(){

  return (this.estados2) ? 'alert-malo animate__animated animate__fadeIn animate__faster text-center':'animate__animated animate__fadeOut';
}



/*cambio de ventanas  si sale malo en listas negras */
redirecion(){

this.estados2 = false;
this.estados =false;
this.router.navigate(['/contacto']);
}

/*eventos para alertas de terminos y condiciones*/
/*eventos modal a un servicio*/
condiciones(){

  this.componentesService.terminos();
  
}


condiciones1(){

  this.componentesService.terminos1();
}

condiciones2(){

  this.componentesService.terminos2();
}



}
