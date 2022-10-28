import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  constructor( private router: Router,
               private componentesService:ComponentesService) { }

  ngOnInit(): void {
  }


  redireciona(){
   
    this.router.navigate(['/flujo/infobasi']);
    this.componentesService.emitircambio("infobasir");
  
  }

  siguiente(){
   
    this.router.navigate(['/flujo/pago']);
    this.componentesService.emitircambio("pago");
  
  }
  
  
  

}
