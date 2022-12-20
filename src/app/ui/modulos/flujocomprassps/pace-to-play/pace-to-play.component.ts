import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../../domain/servicios/componentes.service';
import { SspsService } from '../../../../domain/servicios/ssps.service';


@Component({
  selector: 'app-pace-to-play',
  templateUrl: './pace-to-play.component.html',
  styleUrls: ['./pace-to-play.component.css']
})
export class PaceToPlayComponent implements OnInit {

 
  formaForm!: FormGroup;
  noradicado:string;
  pedido:boolean= false;
  pagos:any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private componentesService: ComponentesService,
              private ssps:SspsService
              ) { 
              
                this.formaForm = this.fb.group({

                  referencia: ['',[
                    Validators.max(9999999)]],
                    valorTotal: [],
                    impuestos:[],
                    basedevolucion:[],
                    nombreComprador:[],
                    correoComprador:[],
                });


              }
              
              

  ngOnInit(): void {
    this.pagos = JSON.parse(localStorage.getItem('compra')); 
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

this.ssps.nodradicado()
.subscribe((res:any)=>{
  let [pedi,id] = res;
  this.noradicado = pedi.nopedido;
  this.pedido = true;
});

//localStorage.clear();

}

 /*rediociona al usuario si se equivova*/
 redireciona(){
 this.router.navigate(['/flujo/pago']);

}

cerrar(){
  this.pedido= false;

}
}


