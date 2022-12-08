<<<<<<< HEAD
import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
=======
import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
<<<<<<< HEAD
comas:boolean= false;
quitar:any;
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

/*validacion de campos y validastors */
  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
              private activateRoute:ActivatedRoute,
<<<<<<< HEAD
              private ssps:SspsService,
              private changeDetector: ChangeDetectorRef
              ) { 
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                    numero:['',[//Validators.required,
                     // Validators.min(1),
                      //Validators.max(9999999999),
                     
                    ]],
                    codigo:['',[
                           Validators.required,
                           Validators.min(0),
                           Validators.max(9),
                           ,Validators.pattern("^[0-9]*$")
                          ]
=======
              private ssps:SspsService
              ) { 
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                    numero:[0,[Validators.required,
                      Validators.min(4),
                      Validators.max(9999999999),
                    ]],
                    codigo:[0,[Validators.required,
                            Validators.min(1),
                            Validators.max(9)]
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
                            ],
                      razon:['',[Validators.required,
                      Validators.minLength(4),
                      Validators.maxLength(60),
                      Validators.pattern("[a-zA-Z ]{2,254}")]],
<<<<<<< HEAD
                  terminosp:[false, Validators.requiredTrue],
                  terminost:[false, Validators.requiredTrue],
                  terminostpro:[false, Validators.requiredTrue],
                
                },{validators:[this.componentesService.minimos('numero')]});   
=======
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
                
                });   
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
                

                   
            }

  ngOnInit(): void {
    console.log('juridica');
   

}

<<<<<<< HEAD
ngAfterContentChecked(): void {
  this.changeDetector.detectChanges();
}
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f


ngAfterViewInit() {
 
}
/*funcion para validacion de campos formularios*/

camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}

<<<<<<< HEAD
//implementacion de validacion de comas
noPuntoComa( event ) {
  
  var e = event || window.event;
  var key = e.keyCode || e.which;


  if ( key === 110 || key === 190 || key === 188 ) {     
   
    this.comas = true;
  }else{
    this.comas = false;
  }
}

/*quitar numeros ceros a la izquierda*/
quitarceros(numero){

  this.quitar = numero.replace(/^0+/, '');
  }
  

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
/*implementacion eventos modal */
abrirmodal() {


  console.log('log abre');

}

cerrarmodal() {
  this.componentesService.cerrarModal();


  
}

/**envio de datos y validacion de boton */
ngsubmit() {
<<<<<<< HEAD
  //console.log(this.formaForm);
=======
  
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  if(this.formaForm.invalid){
   this.formaForm.markAllAsTouched();
   return;
  }
<<<<<<< HEAD
  
=======
  console.log(this.formaForm.value);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  this.estados= true;
  let cedula =this.formaForm.get('numero').value;
  console.log(cedula);
  
  this.ssps.reportados(cedula)
  .subscribe((res:any)=>{
 /*desustrucracion de objeto*/
   let cliente:object={cliente:'juridica'};
   let valores:object =  this.formaForm.value;
   let uid:object ={uid:this.componentesService.myGuid};
   let valoresfi = Object.assign(valores, cliente,uid);
<<<<<<< HEAD

  let date = new Date();
  let fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  let {tipo,numero,razon,terminosp,terminost,terminostpro,codigo} = this.formaForm.value;

  let valoresenv={
    tipoIdentificacion:tipo,
    numeroIdentificacion:numero,
    codigo:codigo,
    razonSocial:razon,
    terminosp:terminosp,
    terminost:terminost,
    terminostpro:terminostpro,
    fecha:fecha,
    uid:this.componentesService.myGuid
  }
  console.log(valoresenv);

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
   let rutaActiva = localStorage.getItem('rutasActivas');
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
        localStorage.setItem('tipocliente', 'juridica');
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
