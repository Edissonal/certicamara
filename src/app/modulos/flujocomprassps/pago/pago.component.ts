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
<<<<<<< HEAD
  radicados: any[] = [];
  descarga:boolean= false;
  compras:any;
  costos:any;

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

  ngOnInit(): void {
    
    this.datosinfo();
<<<<<<< HEAD
    this.ordencambio();

  }

  /*armar datos de compra*/
  datosinfo(){

    this.usuario = JSON.parse(localStorage.getItem('usuario')); 
    let facturacion = JSON.parse(localStorage.getItem('facturacion'));
    let ordenes = JSON.parse(localStorage.getItem('ordenes'));
    let correof = {"correo":facturacion.correo,
                   "comprador":facturacion.razon,
                   "impuestos":this.usuario.impuestos}
    let valoresfi1= Object.assign(correof,ordenes);
    localStorage.setItem("compra", JSON.stringify(valoresfi1));
    
=======

  }

  datosinfo(){
  
    this.usuario = JSON.parse(localStorage.getItem('usuario')); 
    //console.log(this.usuario.costo);
  
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

  /*rediociona al usuario si se equivova*/
  redireciona() {

    if (this.usuario.dispo == "token virtual") {

      this.router.navigate(['/flujo/facturacion']);
      this.componentesService.emitircambio("reverfactu");

    } else if (this.usuario.dispo == "token fisico") {

<<<<<<< HEAD
      this.router.navigate(['/flujo/facturacion']);
      this.componentesService.emitircambio("reverfactu");
=======
      this.router.navigate(['/flujo/entrega']);
      this.componentesService.emitircambio("entregar");
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

    }

  }
/*muestreo de campo costo*/
  documentos(event){

  this.campo = true;
  }

<<<<<<< HEAD
    //llamiento de orden de cambio
    ordencambio(){
  
      this.ssps.ordencambio()
      .subscribe((res:any)=>{
      
        let [nopedido,id] = res;
        this.radicados = nopedido.nopedido;
       

      //  console.log(this.documentos);

      });
  
    }
    

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
<<<<<<< HEAD
    /*Actualizacion orden de cambio*/
      let costos ={"costo":this.usuario.costo};
      this.compras = JSON.parse(localStorage.getItem('compra')); 
    
    Object.assign(this.compras,costos);
    localStorage.setItem("compra", JSON.stringify(this.compras));

    this.ssps.eventos(this.usuario.costo);
    this.validacion =false;

=======
    this.ssps.eventos(this.usuario.costo);
    this.validacion =false;
  
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }
  });


  }

<<<<<<< HEAD

  pagos(){
    this.router.navigate(['/flujo/pasarela']);
  }


fisicos(){

 // console.log(event);
 this.descarga = true;

}
  



=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
}
