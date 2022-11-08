import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

@Component({
  selector: 'app-datos-facturacion',
  templateUrl: './datos-facturacion.component.html',
  styleUrls: ['./datos-facturacion.component.css']
})
export class DatosFacturacionComponent implements OnInit {
formaForm!:FormGroup;


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,) {
       
      /*validacion de campos validators*/
      this.formaForm = this.fb.group({

        nit:['',[Validators.required,
                    Validators.min(99),
                    Validators.max(9999)]],
        razon:['',[Validators.required,
                      Validators.minLength(4),
                      Validators.maxLength(60),
                      Validators.pattern("[a-zA-Z ]{2,254}")]],
        direccion1:['',[Validators.required]],
        direccion2:['',[Validators.required]],
        direccion3:['',[Validators.required]],
        direccion4:['',[Validators.required]],
        direccionp:['',[Validators.required]],
        telefono: ['', [Validators.required,
                              Validators.min(999999),
                              Validators.max(9999999999),
                            ]],
        celular:['',[Validators.required,
                                Validators.minLength(4),
                                Validators.maxLength(60),
                              ]],
        correo:['',[Validators.required,
                            Validators.minLength(8),
                            Validators.maxLength(60),
                            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],   
        capital:['',[Validators.required]],
        regimentributario:['',[Validators.required]],
        codigo:['',[Validators.required,
                                  Validators.minLength(4),
                                  Validators.maxLength(60),
                            ]],
     
      });    
  
  }

    /* funcion para validacion de campos*/
camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}

ngsubmit() {

  console.log(this.formaForm.value);
  if(this.formaForm.invalid){
    this.formaForm.markAllAsTouched();
    return;
   }
   console.log(this.formaForm);


   this.router.navigate(['/flujo/pago']);
   this.componentesService.emitircambio("pagos"); 

  }

  ngOnInit(): void {

    this.cargarDataAlFormulario();
  }

  
cargarDataAlFormulario() {

  // this.forma.setValue({
  this.formaForm.setValue({
    nit: '1234',
    razon: 'Perez',
    direccion1: 'edissonalonso@gmail.com',
    direccion2: 'edissonalonso@gmail.com',
    direccion3: 'edissonalonso@gmail.com',
    direccion4: 'edissonalonso@gmail.com',
    direccionp: 'edissonalonso@gmail.com',
    telefono:'3142082530',
    celular:'3142082530',
    correo:'edissonalonso@gmail.com',
    capital:'edissonalonso@gmail.com',
    regimentributario:'edissonalonso@gmail.com',
    codigo:'2'
  });

}


  /*rediociona al usuario si se equivova*/
  redireciona() {

  /*  if (this.usuario.dispo == "token virtual") {

      this.router.navigate(['/flujo/facturacion']);
      this.componentesService.emitircambio("reverfactu");

    } else if (this.usuario.dispo == "token fisico") {

      this.router.navigate(['/flujo/entrega']);
      this.componentesService.emitircambio("entregar");

    }
*/
      this.router.navigate(['/flujo/entregan']);
      this.componentesService.emitircambio("reveentregan");

  }


}
