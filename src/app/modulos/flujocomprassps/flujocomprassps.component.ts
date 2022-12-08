import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentesService } from '../../servicios/componentes.service';
import { SspsComponent } from '../ssps/ssps.component';
import { SspsService } from '../../servicios/ssps.service';

<<<<<<< HEAD

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
<<<<<<< HEAD
=======
  @ViewChild('entrega', { read: ElementRef, static:false }) entrega: ElementRef;
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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

<<<<<<< HEAD
     // console.log(this.respuesta);
        console.log(res);
=======
      console.log(this.respuesta);

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      if(this.respuesta == "mostrarordencambio"){
             this.nopedido=true;
             this.ssps.nopedido()
             .subscribe((res:any)=>{

<<<<<<< HEAD
         console.log(res);
=======
        //  this.noradicadopedi.nopedido;
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        let [datos,...nopedido] = res;
             
        this.noradicadopedi=  datos.nopedido;

<<<<<<< HEAD
        let usuario = JSON.parse(localStorage.getItem('usuario')); 
        const pedido ={"orden": this.noradicadopedi,
                       "costo":usuario.costo 
                        }        
            console.log('se ejecutaorden');
            localStorage.setItem("ordenes", JSON.stringify(pedido));

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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

<<<<<<< HEAD
=======
 

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  ngOnInit(): void {

    this.compras = JSON.parse(localStorage.getItem('usuario'));
    this.costos = this.compras.costo;
    if(this.compras.cantidad == null && this.compras.cliente =="natural" ){
       this.compras.cantidad =1;
       console.log(this.compras);

<<<<<<< HEAD
=======

      
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

  


}

validaflujos(){
 // console.log(this.respuesta);
  return (this.respuesta == undefined) ? 'flujos':'flujosin';
}


  onResize(event:any) {
    this.tamano =event.target.innerWidth;

<<<<<<< HEAD
    if(this.tamano <= 988){
=======
    if(this.tamano <= 984){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      this.margen.nativeElement.classList.remove('row-margenes');
    }else{
      this.margen.nativeElement.classList.add('row-margenes');
    }

    }

    slidersinfomativos(res:any){


      if(res == "infoperso"){
<<<<<<< HEAD
        console.log( this.basica.nativeElement.classList.remove('flujos'));
=======
        
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        this.basica.nativeElement.classList.remove('flujos');
        this.basica.nativeElement.classList.add('flujosin');
        this.contacto.nativeElement.classList.remove('flujosin');
        this.contacto.nativeElement.classList.add('flujos');
<<<<<<< HEAD
        
      } else if(res =="contactof"){
=======
      } else if(res =="contactof" && this.compras.dispo =="token virtual"){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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

<<<<<<< HEAD
      else if(res =="pagos"){
=======
      else if(res =="pagos" && this.compras.dispo =="token virtual"){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        this.facturacionn.nativeElement.classList.remove('flujos');
        this.facturacionn.nativeElement.classList.add('flujosin');
        this.pago.nativeElement.classList.remove('flujosin');
        this.pago.nativeElement.classList.add('flujos');
      }
 
<<<<<<< HEAD

=======
 
      
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

      else if(res =="entrega" && this.compras.dispo =="token fisico"){
        this.basica.nativeElement.classList.remove('flujos');
        this.basica.nativeElement.classList.add('flujosin');
<<<<<<< HEAD
        this.contacto.nativeElement.classList.remove('flujosin');
        this.contacto.nativeElement.classList.add('flujos');
      }
      else if(res =="pago" && this.compras.dispo =="token fisico"){
        this.entregan.nativeElement.classList.remove('flujos');
        this.entregan.nativeElement.classList.add('flujosin');
=======
        this.entrega.nativeElement.classList.remove('flujosin');
        this.entrega.nativeElement.classList.add('flujos');
      }
      else if(res =="pago" && this.compras.dispo =="token fisico"){
        this.entrega.nativeElement.classList.remove('flujos');
        this.entrega.nativeElement.classList.add('flujosin');
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        this.pago.nativeElement.classList.remove('flujosin');
        this.pago.nativeElement.classList.add('flujos');
      }

<<<<<<< HEAD
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
=======

 /* regreso de flujo*/

 
 else if(res =="reverfactu" && this.compras.dispo =="token virtual"){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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

<<<<<<< HEAD
else if(res =="revecontacto"){
=======
else if(res =="revecontacto" && this.compras.dispo =="token virtual"){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  this.entregan.nativeElement.classList.remove('flujos');
  this.entregan.nativeElement.classList.add('flujosin');
  this.contacto.nativeElement.classList.remove('flujosin');
  this.contacto.nativeElement.classList.add('flujos');
}
<<<<<<< HEAD
else if(res =="reveinfobasi"){
=======
else if(res =="reveinfobasi" && this.compras.dispo =="token virtual"){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  this.contacto.nativeElement.classList.remove('flujos');
  this.contacto.nativeElement.classList.add('flujosin');
  this.basica.nativeElement.classList.remove('flujosin');
  this.basica.nativeElement.classList.add('flujos');
} 



<<<<<<< HEAD
/*regreso token fisico*/
=======


>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
else if(res =="entregar" && this.compras.dispo =="token fisico"){

  this.pago.nativeElement.classList.remove('flujos');
  this.pago.nativeElement.classList.add('flujosin');
<<<<<<< HEAD
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
=======
  this.entrega.nativeElement.classList.remove('flujosin');
  this.entrega.nativeElement.classList.add('flujos');
}


else if(res =="infobasir" && this.compras.dispo =="token fisico"){
  this.entrega.nativeElement.classList.remove('flujos');
  this.entrega.nativeElement.classList.add('flujosin');
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  this.basica.nativeElement.classList.remove('flujosin');
  this.basica.nativeElement.classList.add('flujos');
}

<<<<<<< HEAD



=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
    
    }



    cerrar(){
      this.nopedido= false;
    }
}
