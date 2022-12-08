import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../servicios/componentes.service';
declare var window: any;
@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  @ViewChild('margen', { read: ElementRef, static:false }) margen: ElementRef;
  formaForm!:FormGroup;
  contactos: any ;
<<<<<<< HEAD
  usuario:string;
  tamano!:number;
  comas:boolean= false;
  quitar:any;

=======
  
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService) { 
  
  
      /*validacion de campos validators*/
      this.formaForm = this.fb.group({

        nombre:['',[Validators.required,
<<<<<<< HEAD
                    Validators.maxLength(60),
                    Validators.pattern("[a-zA-Z ]{2,254}")
                  ]],
        apellido:['',[Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(60),
                       Validators.pattern("[a-zA-Z ]{2,254}")
                      ]],
=======
                    Validators.minLength(3),
                    Validators.maxLength(60),
                    Validators.pattern("[a-zA-Z ]{2,254}")]],
        apellido:['',[Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(60),
                        Validators.pattern("[a-zA-Z ]{2,254}")]],
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        empresa:['',[Validators.required,
                          Validators.minLength(4),
                          Validators.maxLength(60),
                          Validators.pattern("[a-zA-Z ]{2,254}")]],

        correo:['',[Validators.required,
<<<<<<< HEAD
=======
                            Validators.minLength(8),
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
                            Validators.maxLength(60),
                            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        
                telefono:[,[Validators.required,
                            Validators.min(999999),
                            Validators.max(9999999999),
                              ]],
        
        ciudad:['',[Validators.required,
                                Validators.minLength(4),
<<<<<<< HEAD
                                Validators.maxLength(18),
=======
                                Validators.maxLength(30),
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
                                Validators.pattern("[a-zA-Z ]{2,254}")]],
                        
      });    
  
  }

<<<<<<< HEAD

=======
  tamano!:number;
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  ngOnInit(): void {

    this.contactos = new window.bootstrap.Modal(
    
      document.getElementById('contacto')
     );
<<<<<<< HEAD
      this.usuario = 
     this.usuario = localStorage.getItem('tipocliente');
     console.log(this.usuario);
     if(this.usuario == "juridica"){
      this.formaForm.get('nombre').clearValidators();
      this.formaForm.get('apellido').clearValidators();
      this.formaForm.removeControl('nombre');
      this.formaForm.removeControl('apellido'); 
    } else if(this.usuario == "natural"){
      this.formaForm.get('empresa').clearValidators();
      this.formaForm.removeControl('empresa'); 
    }
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

  onResize(event:any) {
    this.tamano =event.target.innerWidth;

    if(this.tamano <= 984){
      this.margen.nativeElement.classList.remove('row-margenes');
    }else{
      this.margen.nativeElement.classList.add('row-margenes');
    }

<<<<<<< HEAD

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
    }


/* funcion para validacion de campos*/
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
/*ingreso y validacion de datos de formulario*/
ngsubmit() {
  console.log(this.formaForm);
  if(this.formaForm.invalid){
   this.formaForm.markAllAsTouched();
   return;
  }
  this.contactos.show();
  console.log(this.formaForm.value);
}

/*abrir modal*/

modalopen(){
this.contactos.show();
}



}
