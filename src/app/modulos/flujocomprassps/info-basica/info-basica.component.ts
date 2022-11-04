import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

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


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
              private changeDetector: ChangeDetectorRef) {
    
      /*validacion de campos validators*/
      this.formaForm = this.fb.group({

        nombre:['',[Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(60),
                    Validators.pattern("[a-zA-Z ]{2,254}")]],
        apellido:['',[Validators.required,
                        Validators.minLength(4),
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

      documentos:[Validators.minLength(8)],   
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
  
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
   this.cargarDataAlFormulario();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }



  /*ingreso y validacion de datos de formulario*/
ngsubmit() {

  console.log(this.formaForm.value);
  if(this.formaForm.invalid){
    this.formaForm.markAllAsTouched();
    return;
   }
   console.log(this.formaForm);


   if(this.usuario.dispo == "token virtual"){
    this.componentesService.emitircambio("infoperso");
    this.router.navigate(['/flujo/contacto']);
  }else if(this.usuario.dispo == "token fisico"){
    this.componentesService.emitircambio("entrega");
    this.router.navigate(['/flujo/entrega']);
  
  
  }
     

  }

  /* estado de botones logos cambiantes*/
  estado(valor:string){
   
    if(valor.length > 0){
     this.cambiologo2 = true;
     this.cambiologo = false;
     this.cantidad =this.cantidad+1;
     console.log(this.cambiologo2 );
     console.log(this.cambiologo );
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
    
    console.log (
      'Name: ' + name + "\n" + 
      'Type: ' + type + "\n" +
      'Last-Modified-Date: ' + modifiedDate + "\n" +
      'Size: ' + Math.round(size / 1024) + " KB");
      let tamano = Math.round(size / 1024);

      if(type == "application/pdf"){
      
        this.tipos = false;
      }else{
        
        this.formaForm.controls["imageInput"].setValidators([Validators.required]);
        this.tipos = true;

      }

      console.log(type);
      if(tamano > 10240){
      
        this.archivos = true;
        console.log('mayor');
      }else{
      console.log('menor');
      this.archivos = false;
      }
  }

}

cargarDataAlFormulario() {

  // this.forma.setValue({
  this.formaForm.setValue({
    nombre: 'Fernando',
    apellido: 'Perez',
    correo: 'edissonalonso@gmail.com',
    correo1: 'edissonalonso@gmail.com',
    documentos: 'false',
    cargando: '',
  });

}


}
