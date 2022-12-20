import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ComponentesService } from '../../../../domain/servicios/componentes.service';
import { SspsService } from '../../../../domain/servicios/ssps.service';


@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.css']
})
export class SolicitantesComponent implements OnInit {


  formaForm!: FormGroup;
  usuario:any;
  quitar:string ='';
  datos:any[]=[];
  contador:number =0;
  private selectedFile: File;
  constructor(  private router: Router,
                private fb: FormBuilder,
                private componentesService: ComponentesService,
                private ssps: SspsService) { 
                
                  this.formaForm = this.fb.group({

                    nombre:['',[Validators.required,
                                Validators.minLength(3),
                                Validators.maxLength(60),
                                Validators.pattern("[a-zA-Z ]{2,254}")]],
                    apellido:['',[Validators.required,
                                    Validators.minLength(3),
                                    Validators.maxLength(60),
                                    Validators.pattern("[a-zA-Z ]{2,254}")]],
                    cargo:['',[Validators.required,
                                      Validators.minLength(4),
                                      Validators.maxLength(60),
                                      Validators.pattern("[a-zA-Z ]{2,254}")]],
                    tipo:['',[Validators.required,]],
                    
                    numero:['',[Validators.required,]],
                    cedula:[],
                    representante:[]
                  
                  });
                
                
                }

  ngOnInit(): void {

     this.usuario = JSON.parse(localStorage.getItem('usuario'));

  }


  
  /* funcion para los errores indicados*/
  camposvalidos(campo: any) {
    return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
  }


/*quitar numeros ceros a la izquierda*/
quitarceros(numero){

  this.quitar = this.quitar.replace(/^0+/, '');
  }
  
ngsubmit() {
   console.log(this.formaForm);
 /* if (this.formaForm.invalid) {
    this.formaForm.markAllAsTouched();
    return;
  }
  */


 // let valoresfi = this.formaForm.value;
 // localStorage.setItem("entregaf", JSON.stringify(valoresfi));
      localStorage.setItem("solicitantes", JSON.stringify(this.datos));
      this.router.navigateByUrl('/flujo/entregan');
      
    //this.componentesService.emitircambio("facturacionf");
}


 solicitantes(){
  console.log( this.formaForm.status);

 this.contador = this.contador + 1;

/* if(this.contador > this.usuario.cantidad){
  this.formaForm.setErrors({ 'invalid': true });
}*/
console.log(this.formaForm.status);
 const valores =this.formaForm.value;
 this.datos.push(valores);
 console.log(this.datos);

 //this.formaForm.reset();


}

cambiodatos(i:number){

 for (var e = 0; e < this.datos.length; e++){
    if (e == i){
        this.datos[e].cedula = this.formaForm.get('cedula').value;
        this.datos[e].representante = this.formaForm.get('representante').value;
      }
 }
 console.log(this.datos);


 let cedula = this.formaForm.get('cedula').value;
 let representante =this.formaForm.get('representante').value;

 console.log(cedula);
 console.log(representante);
if(cedula === null || representante === null){
console.log('sin datos');
return;
}else{
  console.log('con datos');
  this.formaForm.reset();
}

}


  /*rediociona al usuario si se equivova*/
  redireciona() {

    if (this.usuario.dispo == "token virtual") {

      this.router.navigate(['/flujo/entregan']);
      this.componentesService.emitircambio("reveentregan");

    } else if (this.usuario.dispo == "token fisico") {

      this.router.navigate(['/flujo/entrega']);
      this.componentesService.emitircambio("entregarf");

    }

}

onFileSelect(event) {
  this.selectedFile = event.target.files[0];
  console.log(this.selectedFile.name);
}
}