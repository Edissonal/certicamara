import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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
        
    
                        
      });  
  
  
  
  
  }

  ngOnInit(): void {
  }

  camposvalidos(campo:any){
    return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
  }
  

}
