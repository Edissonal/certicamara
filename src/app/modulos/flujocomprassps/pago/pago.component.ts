import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(private router: Router,
              private componentesService:ComponentesService) { }
  usuario: any;
  valor:number;

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    
    
    console.log(this.usuario.costo);

  }

  /*rediociona al usuario si se equivova*/
  redireciona() {

    if (this.usuario.dispo == "token virtual") {

      this.router.navigate(['/flujo/contacto']);
      this.componentesService.emitircambio("infopersor");

    } else if (this.usuario.dispo == "token fisico") {

      this.router.navigate(['/flujo/entrega']);
      this.componentesService.emitircambio("entregar");

    }

  }

}
