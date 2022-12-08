import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { take, timeout } from 'rxjs';
import { ComponentesService } from '../../../servicios/componentes.service';
import { SspsService } from '../../../servicios/ssps.service';
=======
import { ComponentesService } from '../../../servicios/componentes.service';
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

@Component({
  selector: 'app-info-basica',
  templateUrl: './info-basica.component.html',
  styleUrls: ['./info-basica.component.css']
})
export class InfoBasicaComponent implements OnInit {

  @Output() infobasica: EventEmitter<boolean> = new EventEmitter();
  formaForm!:FormGroup;
  cambiologo2:boolean =false;
  cambiologo:boolean = true;
  documento:boolean = false;
  cantidad:number=0;
  usuario:any;
  archivos:boolean= false;
  tipos:boolean= false;
  mayor : boolean=false;


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
<<<<<<< HEAD
              private ssps:SspsService,
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
              private changeDetector: ChangeDetectorRef) {
    
      /*validacion de campos validators*/
      this.formaForm = this.fb.group({

        nombre:['',[Validators.required,
<<<<<<< HEAD
                    Validators.minLength(3),
                    Validators.maxLength(60),
                    Validators.pattern("[a-zA-Z ]{2,254}")]],
        apellido:['',[Validators.required,
                        Validators.minLength(3),
=======
                    Validators.minLength(4),
                    Validators.maxLength(60),
                    Validators.pattern("[a-zA-Z ]{2,254}")]],
        apellido:['',[Validators.required,
                        Validators.minLength(4),
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
                        Validators.maxLength(60),
                        Validators.pattern("[a-zA-Z ]{2,254}")]],


        correo:['',[Validators.required,
                            Validators.minLength(8),
                            Validators.maxLength(60),
                            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],     
        
        correo1:['',[Validators.required,
                              Validators.minLength(8),
                              Validators.maxLength(60),
                              Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],     

<<<<<<< HEAD
      documentos:[],   
=======
      documentos:[Validators.minLength(8)],   
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      cargando:[],     
      },{
        validators: this.componentesService.soniguales('correo','correo1')
      });    


  }



  /* funcion para validacion de campos*/
camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}

  ngOnInit(): void {
<<<<<<< HEAD
 
    /*asignacion de valores desde el cervicio crm*/

    let cedula =  JSON.parse(localStorage.getItem('cedula'));
    let usurest =JSON.parse(localStorage.getItem('usurest'));
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    this.ssps.crm(cedula)
    .subscribe((res:any)=>{ 

      let [datos,otros] = res; 
    
        if(!Array.isArray(res)||res.length === 0){return;}
        else if(res.length > 0){
                    if(usurest == null){
                      /*llenado de objeto por primera vez*/
                      localStorage.setItem("usurest", JSON.stringify(datos));   
                      Object.assign(this.usuario, datos);
                      localStorage.setItem("usuario", JSON.stringify(this.usuario));
                    }

        }
    });

=======
  
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
   this.cargarDataAlFormulario();
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }



<<<<<<< HEAD
  /*ingreso y validacion de datos de formulario enviuo de los mismos localstorage*/
ngsubmit() {

  //console.log(this.formaForm.value);
=======
  /*ingreso y validacion de datos de formulario*/
ngsubmit() {

  console.log(this.formaForm.value);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  if(this.formaForm.invalid){
    this.formaForm.markAllAsTouched();
    return;
   }
<<<<<<< HEAD
   //console.log(this.formaForm);

   let {correo1,correo,cargando} = this.formaForm.value;
   let datos={
    
    correo:correo,
    correo1:correo1,
    documentos:cargando
  }
  
   Object.assign(this.usuario, datos);
   localStorage.setItem("usuario", JSON.stringify( this.usuario));

   this.componentesService.emitircambio("infoperso");
   this.router.navigate(['/flujo/contacto']);
=======
   console.log(this.formaForm);


   if(this.usuario.dispo == "token virtual"){
    this.componentesService.emitircambio("infoperso");
    this.router.navigate(['/flujo/contacto']);
  }else if(this.usuario.dispo == "token fisico"){
    this.componentesService.emitircambio("entrega");
    this.router.navigate(['/flujo/entrega']);
  
  
  }
     

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

  /* estado de botones logos cambiantes*/
  estado(valor:string){
<<<<<<< HEAD
   //  console.log(valor);
    if(this.cantidad == 0){
  //   this.cambiologo2 = true;
   //  this.cambiologo = false;
     this.cantidad =this.cantidad+1;
   //  console.log(this.cambiologo2 );
    // console.log(this.cambiologo );
=======
   
    if(valor.length > 0){
     this.cambiologo2 = true;
     this.cambiologo = false;
     this.cantidad =this.cantidad+1;
     console.log(this.cambiologo2 );
     console.log(this.cambiologo );
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
    }


  }

  //cambio de estilos animacion boton archivos
validar(){

  return (this.cambiologo = true) ? ' animate__animated animate__fadeIn animate__fast': 'animate__animated animate__fadeOut animate__fast';
}


/*muestra boton de carga*/
documentos(event){

this.documento = true;


}


/*validacion de salerta campos iguales*/
get pass2NoValido() {
  const pass1 = this.formaForm.get('correo').value;
  const pass2 = this.formaForm.get('correo1').value;

  return ( pass1 === pass2 ) ? false : true;
}



/*validar tamaño de archivo*/ 
getFileDetails (event) {

  
  for (var i = 0; i < event.target.files.length; i++) { 
    let name = event.target.files[i].name;
    let type = event.target.files[i].type;
    let size = event.target.files[i].size;
    let modifiedDate = event.target.files[i].lastModifiedDate;
    
<<<<<<< HEAD
   /* console.log (
      'Name: ' + name + "\n" + 
      'Type: ' + type + "\n" +
      'Last-Modified-Date: ' + modifiedDate + "\n" +
      'Size: ' + Math.round(size / 1024) + " KB");*/
      let tamano = Math.round(size / 1024);

      if(type == "application/pdf" || type == "application/x-zip-compressed"){
      
        this.tipos = false;
          this.cambiologo2 = true;
          this.cambiologo = false;
          if(tamano > 10240){
          
            this.archivos = true;
            this.formaForm.reset('cargando');
            this.formaForm.controls["cargando"].setValidators([Validators.required]);
            this.formaForm.get('cargando').updateValueAndValidity();
            this.archivos = true;
            this.cambiologo2 = false;
            this.cambiologo = true;
          //  console.log('mayor');

          }
        
=======
    console.log (
      'Name: ' + name + "\n" + 
      'Type: ' + type + "\n" +
      'Last-Modified-Date: ' + modifiedDate + "\n" +
      'Size: ' + Math.round(size / 1024) + " KB");
      let tamano = Math.round(size / 1024);

      if(type == "application/pdf"){
      
        this.tipos = false;
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      }else{
        this.formaForm.reset('cargando');
        this.formaForm.controls["cargando"].setValidators([Validators.required]);
        this.formaForm.get('cargando').updateValueAndValidity();
        this.tipos = true;
<<<<<<< HEAD
        this.cambiologo2 = false;
        this.cambiologo = true;
      
        if(tamano > 10240){
      
          this.archivos = false;
          this.cambiologo2 = true;
          this.cambiologo = false;
        }

      }

=======
        this.cambiologo2 = true;

      }

      console.log(type);
      if(tamano > 10240){
      
        this.archivos = true;
        this.formaForm.reset('cargando');
        this.formaForm.controls["cargando"].setValidators([Validators.required]);
        this.formaForm.get('cargando').updateValueAndValidity();
        this.archivos = true;
        console.log('mayor');
      }else{
      console.log('menor');
      this.archivos = false;
      }
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

}

<<<<<<< HEAD
/*
cargarDataAlFormulario() {

  this.formaForm.setValue({
    nombre: this.usuario.nombres,
    apellido: this.usuario.apellidos,
    correo: this.usuario.correo,
    correo1:this.usuario.correo,
    documentos: this.usuario.documentos,
=======

cargarDataAlFormulario() {

  // this.forma.setValue({
  this.formaForm.setValue({
    nombre: 'Fernando',
    apellido: 'Perez',
    correo: 'edissonalonso@gmail.com',
    correo1: 'edissonalonso@gmail.com',
    documentos: 'false',
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
    cargando: '',
  });

}
<<<<<<< HEAD
*/
=======

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

}
