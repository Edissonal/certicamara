import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-n',
  templateUrl: './persona-n.component.html',
  styleUrls: ['./persona-n.component.css']
})
export class PersonaNComponent implements OnInit {

  formaForm!:FormGroup;
  estados:boolean=false;
 @Input ()formModal:any;

  constructor(private fb:FormBuilder,
              private router:Router) { 
                this.formaForm = this.fb.group({
                  tipo:['',[Validators.required]],
                  numero:['',[Validators.required,Validators.minLength(4)]],
                  nombres:['',[Validators.required,Validators.minLength(4)]],
                  terminosp:['',[Validators.required]],
                  terminost:['',[Validators.required]],
                  terminostpro:['',[Validators.required]],
                
                });    
            }

  ngOnInit(): void {
    console.log('natural');

                   

}

camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}

/*implementacion eventos modal */
abrirmodal() {

  //if(this.evento){
  this.formModal.show();
  console.log('log abre');
  console.log(this.formModal);

//}
}



cerrarmodal() {
  // confirm or save something
  this.formModal.hide();
  console.log('cierra');

  console.log(this.formModal);
  
}

ngsubmit() {
  
  if(this.formaForm.invalid){
   this.formaForm.markAllAsTouched();
   return;
  }
  console.log(this.formaForm.value);
  this.estados= true;



  setTimeout(() => {
    
    this.cerrarmodal();
    this.router.navigate(['planes']);
    
  }, 2500);

}






validar(){

  return (this.estados) ? 'alert alert-light animate__animated animate__fadeIn animate__faster text-center ':'';
}



natural(){
  this.router.navigateByUrl('certimail/juridica')
  console.log('ejecutado');
}

juridica(){
  this.router.navigate(['/certimail/juridica']);
}

}
