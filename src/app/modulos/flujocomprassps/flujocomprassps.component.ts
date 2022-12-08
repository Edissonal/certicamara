import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentesService } from '../../servicios/componentes.service';
import { SspsComponent } from '../ssps/ssps.component';
import { SspsService } from '../../servicios/ssps.service';


@Component({
  selector: 'app-flujocomprassps',
  templateUrl: './flujocomprassps.component.html',
  styleUrls: ['./flujocomprassps.component.css']
})
export class FlujocomprasspsComponent implements OnInit {

  @ViewChild('margen', { read: ElementRef, static:false }) margen: ElementRef;
  @ViewChild('basica', { read: ElementRef, static:false }) basica: ElementRef;
  @ViewChild('contacto', { read: ElementRef, static:false }) contacto: ElementRef;
  @ViewChild('entregan', { read: ElementRef, static:false }) entregan: ElementRef;
  @ViewChild('facturacionn', { read: ElementRef, static:false }) facturacionn: ElementRef;
  @ViewChild('pago', { read: ElementRef, static:false }) pago: ElementRef;

  tamano!:number;
  compras;
  respuesta:string;
  filtra:boolean= false;
  nopedido:boolean=false;
  noradicadopedi:object;
  costos:number;
  



  constructor(private  componentesService:ComponentesService,
              private  ssps:SspsService) {
  


    this.componentesService.eventos$.subscribe(res => {  
      this.respuesta = res;

     // console.log(this.respuesta);
        console.log(res);
      if(this.respuesta == "mostrarordencambio"){
             this.nopedido=true;
             this.ssps.nopedido()
             .subscribe((res:any)=>{

         console.log(res);
        let [datos,...nopedido] = res;
             
        this.noradicadopedi=  datos.nopedido;

        let usuario = JSON.parse(localStorage.getItem('usuario')); 
        const pedido ={"orden": this.noradicadopedi,
                       "costo":usuario.costo 
                        }        
            console.log('se ejecutaorden');
            localStorage.setItem("ordenes", JSON.stringify(pedido));

            });
      }else{
            this.nopedido=false;
      }

      this.slidersinfomativos(res);

  });

  this.ssps.eventos$.subscribe(res=>{
  
   this.costos =res;
  
  });
  
  }

  ngOnInit(): void {

    this.compras = JSON.parse(localStorage.getItem('usuario'));
    this.costos = this.compras.costo;
    if(this.compras.cantidad == null && this.compras.cliente =="natural" ){
       this.compras.cantidad =1;
       console.log(this.compras);

  }

  


}

validaflujos(){
 // console.log(this.respuesta);
  return (this.respuesta == undefined) ? 'flujos':'flujosin';
}


  onResize(event:any) {
    this.tamano =event.target.innerWidth;

    if(this.tamano <= 988){
      this.margen.nativeElement.classList.remove('row-margenes');
    }else{
      this.margen.nativeElement.classList.add('row-margenes');
    }

    }

    slidersinfomativos(res:any){


      if(res == "infoperso"){
        console.log( this.basica.nativeElement.classList.remove('flujos'));
        this.basica.nativeElement.classList.remove('flujos');
        this.basica.nativeElement.classList.add('flujosin');
        this.contacto.nativeElement.classList.remove('flujosin');
        this.contacto.nativeElement.classList.add('flujos');
        
      } else if(res =="contactof"){
        this.contacto.nativeElement.classList.remove('flujos');
        this.contacto.nativeElement.classList.add('flujosin');
        this.entregan.nativeElement.classList.remove('flujosin');
        this.entregan.nativeElement.classList.add('flujos');
      }
      else if(res =="facturacionn" && this.compras.dispo =="token virtual"){
        this.entregan.nativeElement.classList.remove('flujos');
        this.entregan.nativeElement.classList.add('flujosin');
        this.facturacionn.nativeElement.classList.remove('flujosin');
        this.facturacionn.nativeElement.classList.add('flujos');
      }

      else if(res =="pagos"){
        this.facturacionn.nativeElement.classList.remove('flujos');
        this.facturacionn.nativeElement.classList.add('flujosin');
        this.pago.nativeElement.classList.remove('flujosin');
        this.pago.nativeElement.classList.add('flujos');
      }
 


      else if(res =="entrega" && this.compras.dispo =="token fisico"){
        this.basica.nativeElement.classList.remove('flujos');
        this.basica.nativeElement.classList.add('flujosin');
        this.contacto.nativeElement.classList.remove('flujosin');
        this.contacto.nativeElement.classList.add('flujos');
      }
      else if(res =="pago" && this.compras.dispo =="token fisico"){
        this.entregan.nativeElement.classList.remove('flujos');
        this.entregan.nativeElement.classList.add('flujosin');
        this.pago.nativeElement.classList.remove('flujosin');
        this.pago.nativeElement.classList.add('flujos');
      }

      //implementacion de rutas token fisico
 
      if(res =="facturacionf" && this.compras.dispo =="token fisico"){
        this.entregan.nativeElement.classList.remove('flujos');
        this.entregan.nativeElement.classList.add('flujosin');
        this.facturacionn.nativeElement.classList.remove('flujosin');
        this.facturacionn.nativeElement.classList.add('flujos');
      }
      
      
      if(res =="instalaciones" && this.compras.dispo =="token fisico"){
        this.entregan.nativeElement.classList.remove('flujos');
        this.entregan.nativeElement.classList.add('flujosin');
        this.facturacionn.nativeElement.classList.remove('flujosin');
        this.facturacionn.nativeElement.classList.add('flujos');
      }

       
 /* regreso de flujo*/

 
 else if(res =="reverfactu"){
  this.pago.nativeElement.classList.remove('flujos');
  this.pago.nativeElement.classList.add('flujosin');
  this.facturacionn.nativeElement.classList.remove('flujosin');
  this.facturacionn.nativeElement.classList.add('flujos');
}
else if(res =="reveentregan" && this.compras.dispo =="token virtual"){
  this.facturacionn.nativeElement.classList.remove('flujos');
  this.facturacionn.nativeElement.classList.add('flujosin');
  this.entregan.nativeElement.classList.remove('flujosin');
  this.entregan.nativeElement.classList.add('flujos');
}

else if(res =="revecontacto"){
  this.entregan.nativeElement.classList.remove('flujos');
  this.entregan.nativeElement.classList.add('flujosin');
  this.contacto.nativeElement.classList.remove('flujosin');
  this.contacto.nativeElement.classList.add('flujos');
}
else if(res =="reveinfobasi"){
  this.contacto.nativeElement.classList.remove('flujos');
  this.contacto.nativeElement.classList.add('flujosin');
  this.basica.nativeElement.classList.remove('flujosin');
  this.basica.nativeElement.classList.add('flujos');
} 



/*regreso token fisico*/
else if(res =="entregar" && this.compras.dispo =="token fisico"){

  this.pago.nativeElement.classList.remove('flujos');
  this.pago.nativeElement.classList.add('flujosin');
  this.entregan.nativeElement.classList.remove('flujosin');
  this.entregan.nativeElement.classList.add('flujos');
}


else if(res =="entregarf" && this.compras.dispo =="token fisico"){

  this.facturacionn.nativeElement.classList.remove('flujos');
  this.facturacionn.nativeElement.classList.add('flujosin');
  this.entregan.nativeElement.classList.remove('flujosin');
  this.entregan.nativeElement.classList.add('flujos');
}



else if(res =="infobasir" && this.compras.dispo =="token fisico"){
  this.entregan.nativeElement.classList.remove('flujos');
  this.entregan.nativeElement.classList.add('flujosin');
  this.basica.nativeElement.classList.remove('flujosin');
  this.basica.nativeElement.classList.add('flujos');
}




    
    }



    cerrar(){
      this.nopedido= false;
    }
}
