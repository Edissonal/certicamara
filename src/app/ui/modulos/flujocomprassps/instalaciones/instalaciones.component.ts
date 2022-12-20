import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from 'src/app/domain/servicios/componentes.service';



@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {

  formaForm!: FormGroup;
  usuario:any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private componentesService: ComponentesService
              ) { 
              
                this.formaForm = this.fb.group({

                  correo: ['', [
                    Validators.minLength(8),
                    Validators.maxLength(60),
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
                    indicativo: [Validators.required],
                });


              }
              
              

  ngOnInit(): void {
     this.usuario= JSON.parse(localStorage.getItem('instalaciones'));
  }


    /* funcion para los errores indicados*/
    camposvalidos(campo: any) {
      return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
    }

    
    /*funcion para el envio de datos*/
  ngsubmit() {

    if (this.formaForm.invalid) {
      this.formaForm.markAllAsTouched();
      return;
    }

    this.router.navigateByUrl('/flujo/facturacion');
    this.componentesService.emitircambio('instalaciones');
    let valoresfi = this.formaForm.value;
    //console.log('hizo click');
    localStorage.setItem("instalaciones", JSON.stringify(valoresfi));

}

 /*rediociona al usuario si se equivova*/
 redireciona(){
 this.router.navigate(['/flujo/contacto']);
 this.componentesService.emitircambio("revecontacto");
}



}
