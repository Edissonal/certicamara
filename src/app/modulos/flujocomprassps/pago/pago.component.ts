import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
import { SspsService } from '../../../servicios/ssps.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(private router: Router,
              private componentesService:ComponentesService,
              private ssps:SspsService) { }
  usuario: any;
  valor:number;
  campo:any;
  validacion:boolean=false;

  ngOnInit(): void {
    
    this.datosinfo();

  }

  datosinfo(){
  
    this.usuario = JSON.parse(localStorage.getItem('usuario')); 
    //console.log(this.usuario.costo);
  
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
/*muestreo de campo costo*/
  documentos(event){

  this.campo = true;
  }

/* busca el dodigo selecionado de la persona*/
  buscarcodigo(codigo:string){
  this.ssps.nodescuentop(codigo)
  .subscribe((res:any)=>{
  
    let [datos,...descuentos] = res;

    if(datos == undefined){
      this.validacion =true;
  return;
  }else{
    this.usuario.costo = this.usuario.costo-datos.costo;
    this.ssps.eventos(this.usuario.costo);
    this.validacion =false;
  
  }
  });


  }

}
