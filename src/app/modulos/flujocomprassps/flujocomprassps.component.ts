import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentesService } from '../../servicios/componentes.service';

@Component({
  selector: 'app-flujocomprassps',
  templateUrl: './flujocomprassps.component.html',
  styleUrls: ['./flujocomprassps.component.css']
})
export class FlujocomprasspsComponent implements OnInit {

  @ViewChild('margen', { read: ElementRef, static:false }) margen: ElementRef;
  @ViewChild('basica', { read: ElementRef, static:false }) basica: ElementRef;
  @ViewChild('contacto', { read: ElementRef, static:false }) contacto: ElementRef;
  @ViewChild('entrega', { read: ElementRef, static:false }) entrega: ElementRef;
  @ViewChild('pago', { read: ElementRef, static:false }) pago: ElementRef;
  tamano!:number;
  compras;
  respuesta:string;
  filtra:boolean= false;
  constructor(private  componentesService:ComponentesService) {
  
   

    this.componentesService.eventos$.subscribe(res => {
             
          this.respuesta = res;

      if(res == "infoperso"){
        
        this.basica.nativeElement.classList.remove('flujos');
        this.basica.nativeElement.classList.add('flujosin');
        this.contacto.nativeElement.classList.remove('flujosin');
        this.contacto.nativeElement.classList.add('flujos');
      } else if(res =="contactof" && this.compras.dispo =="token virtual"){
        this.contacto.nativeElement.classList.remove('flujos');
        this.contacto.nativeElement.classList.add('flujosin');
        this.pago.nativeElement.classList.remove('flujosin');
        this.pago.nativeElement.classList.add('flujos');
      }
      else if(res =="entrega" && this.compras.dispo =="token fisico"){
        this.basica.nativeElement.classList.remove('flujos');
        this.basica.nativeElement.classList.add('flujosin');
        this.entrega.nativeElement.classList.remove('flujosin');
        this.entrega.nativeElement.classList.add('flujos');
      }
      else if(res =="pago" && this.compras.dispo =="token fisico"){
        this.entrega.nativeElement.classList.remove('flujos');
        this.entrega.nativeElement.classList.add('flujosin');
        this.pago.nativeElement.classList.remove('flujosin');
        this.pago.nativeElement.classList.add('flujos');
      }


 /* regreso de flujo*/
  if(res =="entregar" && this.compras.dispo =="token fisico"){

  this.pago.nativeElement.classList.remove('flujos');
  this.pago.nativeElement.classList.add('flujosin');
  this.entrega.nativeElement.classList.remove('flujosin');
  this.entrega.nativeElement.classList.add('flujos');
}
else if(res =="infopersor" && this.compras.dispo =="token virtual"){
  this.pago.nativeElement.classList.remove('flujos');
  this.pago.nativeElement.classList.add('flujosin');
  this.contacto.nativeElement.classList.remove('flujosin');
  this.contacto.nativeElement.classList.add('flujos');
}

else if(res =="infobasir" && this.compras.dispo =="token fisico"){
  this.entrega.nativeElement.classList.remove('flujos');
  this.entrega.nativeElement.classList.add('flujosin');
  this.basica.nativeElement.classList.remove('flujosin');
  this.basica.nativeElement.classList.add('flujos');
}
else if(res =="infobasic" && this.compras.dispo =="token virtual"){
  this.contacto.nativeElement.classList.remove('flujos');
  this.contacto.nativeElement.classList.add('flujosin');
  this.basica.nativeElement.classList.remove('flujosin');
  this.basica.nativeElement.classList.add('flujos');
}



  });
  
  }

 


  ngOnInit(): void {

    this.compras = JSON.parse(localStorage.getItem('usuario'));
     
    if(this.compras.cantidad == null && this.compras.cliente =="natural" ){
       this.compras.cantidad =1;
       console.log(this.compras);
      
  }

  


}

validaflujos(){
  console.log(this.respuesta);
  return (this.respuesta == undefined) ? 'flujos':'flujosin';
}


  onResize(event:any) {
    this.tamano =event.target.innerWidth;

    if(this.tamano <= 984){
      this.margen.nativeElement.classList.remove('row-margenes');
    }else{
      this.margen.nativeElement.classList.add('row-margenes');
    }

    }


}
