import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent implements OnInit {

  
  formaForm!:FormGroup;
  constructor(private fb:FormBuilder) { 
  
  
this.formaForm = this.fb.group({
 
  tipo:['',[Validators.required]],
  numero:['',[Validators.required,Validators.minLength(4)]],
  nombres:['',[Validators.required,Validators.minLength(4)]],
  terminosp:['',[Validators.required]],
  terminost:['',[Validators.required]],
  terminostpro:['',[Validators.required]],

});

  }

  camposvalidos(campo:any){
      return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
  }

  
  ngsubmit() {
  
    if(this.formaForm.invalid){
     this.formaForm.markAllAsTouched();
     return;
    }
    console.log(this.formaForm.value);
  }

  ngOnInit(): void {

  }

}
