import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

@Component({
  selector: 'app-info-basica',
  templateUrl: './info-basica.component.html',
  styleUrls: ['./info-basica.component.css']
})
export class InfoBasicaComponent implements OnInit {

  formaForm!:FormGroup;

  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService) {
    
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

      documentos:['',[Validators.required]],  
      copia:['',[Validators.required]],     
      });    

      
  
  }

  /* funcion para validacion de campos*/
camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}

  ngOnInit(): void {
  }

  /*ingreso y validacion de datos de formulario*/
ngsubmit() {

  console.log(this.formaForm.value);
  if(this.formaForm.invalid){
    this.formaForm.markAllAsTouched();
    return;
   }
   console.log(this.formaForm.value);

}

}
