import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SspsService } from 'src/app/servicios/ssps.service';
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
              private activateRoute:ActivatedRoute,
              private ssps:SspsService
              ) { 
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                    numero:[0,[Validators.required,
                      Validators.min(999),
                      Validators.max(9999999999),
                    ]],
                    codigo:[0,[Validators.required,
                            Validators.min(9),
                            Validators.max(9999999999)]
                            ],
                      razon:['',[Validators.required,
                      Validators.minLength(4),
                      Validators.maxLength(60),
                      Validators.pattern("[a-zA-Z ]{2,254}")]],
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
                
                });   
                

                   
            }

  ngOnInit(): void {
    console.log('juridica');
   

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
   return;
  }
  console.log(this.formaForm.value);
  this.estados= true;
  let cedula =this.formaForm.get('numero').value;
  console.log(cedula);
  
  this.ssps.reportados(cedula)
  .subscribe((res:any)=>{
 /*desustrucracion de objeto*/
 let rutaActiva = localStorage.getItem('rutasActivas')
      if(res == ""){
        console.log('usuario no exixte');
        localStorage.setItem("cedula",cedula );
        this.router.navigate([rutaActiva]);
      }else{
      
        console.log('llegaron datos');
    
    let [datos,...reportado] = res;
    console.log(datos.reportado);



    setTimeout(() => {
    /*validaciones  yredioreaciones a componentes*/
      if(datos.reportado === false){
        console.log('no repotado');
        this.cerrarmodal();
        this.router.navigate([rutaActiva]);
        console.log(this.formaForm.value);
        localStorage.setItem("usuario", JSON.stringify(this.formaForm.value));
        localStorage.setItem("cedula",cedula );
        }else{
        console.log('reportado');
        this.estados2 = true;
        }
    }, 2500);
}

  })




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
