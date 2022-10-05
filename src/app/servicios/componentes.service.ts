import { Injectable } from '@angular/core';
//declare var window: any;
@Injectable({
  providedIn: 'root'
})
export class ComponentesService {
  private datos: any | undefined;
  formModal: any | undefined;


  constructor() {


 
   
  console.log('cargada servicio');

  }
  
    abrirmodal(){
      console.log('model desde servicio');
      console.log(this.formModal);
       this.formModal.show();
    }

    cerrarModal(){
      // this.datos = datos;
     
       console.log(this.formModal);
       this.formModal.hide();
     
         }

}
