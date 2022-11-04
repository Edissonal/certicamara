import { Component, OnInit } from '@angular/core';
import { ComponentesService } from '../../servicios/componentes.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  valor!:string;
  constructor(private componente:ComponentesService) {
  
    this.componente.eventos$.subscribe(res => {
    
        this.valor = res;
       
    });

    
  
  }



  ngOnInit(): void {
  
  
  }


  documentos(){

    return (this.valor =="infoperso"  ) ? 'iconos2':'bordes';
  }
  
  contacto(){
    return (  this.valor =="mostrarordencambio"  ) ? 'iconos2':'bordes';
  }

}
