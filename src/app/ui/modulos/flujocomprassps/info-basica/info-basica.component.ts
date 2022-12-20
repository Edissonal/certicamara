import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { take, timeout } from 'rxjs';
import { ComponentesService } from '../../../../domain/servicios/componentes.service';
import { SspsService } from '../../../../domain/servicios/ssps.service';


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
              private ssps:SspsService,
              private changeDetector: ChangeDetectorRef) {
    
      /*validacion de campos validators*/
      this.formaForm = this.fb.group({

        nombre:['',[Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(60),
                    Validators.pattern("[a-zA-Z ]{2,254}")]],
        apellido:['',[Validators.required,
                        Validators.minLength(3),
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

      documentos:[],   
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

  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }



  /*ingreso y validacion de datos de formulario enviuo de los mismos localstorage*/
ngsubmit() {

  //console.log(this.formaForm.value);
  if(this.formaForm.invalid){
    this.formaForm.markAllAsTouched();
    return;
   }
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
  }

  /* estado de botones logos cambiantes*/
  estado(valor:string){
   //  console.log(valor);
    if(this.cantidad == 0){
  //   this.cambiologo2 = true;
   //  this.cambiologo = false;
     this.cantidad =this.cantidad+1;
   //  console.log(this.cambiologo2 );
    // console.log(this.cambiologo );
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
        
      }else{
        this.formaForm.reset('cargando');
        this.formaForm.controls["cargando"].setValidators([Validators.required]);
        this.formaForm.get('cargando').updateValueAndValidity();
        this.tipos = true;
        this.cambiologo2 = false;
        this.cambiologo = true;
      
        if(tamano > 10240){
      
          this.archivos = false;
          this.cambiologo2 = true;
          this.cambiologo = false;
        }

      }

  }

}

/*
cargarDataAlFormulario() {

  this.formaForm.setValue({
    nombre: this.usuario.nombres,
    apellido: this.usuario.apellidos,
    correo: this.usuario.correo,
    correo1:this.usuario.correo,
    documentos: this.usuario.documentos,
    cargando: '',
  });

}
*/

}
