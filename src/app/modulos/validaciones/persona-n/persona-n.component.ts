import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
import { SspsService } from '../../../servicios/ssps.service';
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
  reportes:any;
  pasaportes:boolean = false;
  cedulas:boolean = true;
<<<<<<< HEAD
  quitar:string ='';
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
              private activateRoute:ActivatedRoute,
              private ssps:SspsService) {
                
                /*validacion de campos validators*/
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
<<<<<<< HEAD
                  numero:[0,[//Validators.required,
                            // Validators.pattern('([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*')
                            ]],
=======
                  numero:['',[]],
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
                  nombres:['',[Validators.required,
                              Validators.minLength(3),
                              Validators.maxLength(60),
                              Validators.pattern("[a-zA-Z ]{2,254}")
                            ]
                            ],
                  apellidos:['',[Validators.required,
                                  Validators.minLength(3),
                                  Validators.maxLength(60),
                                  Validators.pattern("[a-zA-Z ]{2,254}")]],
<<<<<<< HEAD
                  terminosp:[false, Validators.requiredTrue],
                  terminost:[false, Validators.requiredTrue],
                  terminostpro:[false, Validators.requiredTrue],
=======
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
                
                },{validators:[this.componentesService.codigonit('tipo','numero')]});        
               
                
            }

/* funcion para validacion de campos*/
camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}


<<<<<<< HEAD
/*quitar numeros ceros a la izquierda*/
quitarceros(numero){

this.quitar = this.quitar.replace(/^0+/, '');
}
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f


ngOnInit(): void {
  console.log('natural');
//  this.onchanges();

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
<<<<<<< HEAD
  //console.log(this.formaForm.value);
=======
  console.log(this.formaForm.value);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  this.estados= true;
  let cedula =this.formaForm.get('numero').value;
  console.log(cedula);
  
  this.ssps.reportados(cedula)
  .subscribe((res:any)=>{
 /*desustrucracion de objeto*/
       let rutaActiva = localStorage.getItem('rutasActivas');
       let cliente:object={cliente:'natural'};
       let valores:object =  this.formaForm.value;
       let uid:object ={uid:this.componentesService.myGuid};
       let valoresfi = Object.assign(valores, cliente,uid);
<<<<<<< HEAD
      
       let date = new Date();
       let fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
       let {tipo,numero,nombres,apellidos,terminosp,terminost,terminostpro} = this.formaForm.value;
      
       let valoresenv={
        tipoIdentificacion:tipo,
        numeroIdentificacion:numero,
        nombres:nombres,
        apellidos:apellidos,
        terminosp:terminosp,
        terminost:terminost,
        terminostpro:terminostpro,
        fecha:fecha,
        uid:this.componentesService.myGuid
      }
      
      console.log(valoresenv);

       //let valoresfi = Object.assign(valores, cliente,uid);
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      if(res == ""){
        console.log('usuario no exixte');
        localStorage.setItem("cedula",cedula );
        localStorage.setItem("usuario", JSON.stringify(valoresfi));
        this.cerrarmodal();
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
<<<<<<< HEAD
        console.log(valoresenv);
=======
        console.log(this.formaForm.value);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        /*implementacion inyeccion de roll a objeto*/
        
        localStorage.setItem("usuario", JSON.stringify(valoresfi));
        localStorage.setItem("cedula",cedula );
        }else{
        console.log('reportado');
        this.estados2 = true;
<<<<<<< HEAD
        localStorage.setItem('tipocliente', 'natural');
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        }
    }, 2500);
}

  })




}


/* estilos alertas */
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
 
<<<<<<< HEAD
 
=======

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
 }
 

