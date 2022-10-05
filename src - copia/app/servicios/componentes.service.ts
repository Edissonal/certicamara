import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {
  private datos: any | undefined;

  get formModal():any {
    return {...this.datos!}
  }
  

  constructor() {
  
   /*  this.formModal = new window.bootstrap.Modal(
     document.getElementById('exampleModal')
    
    );*/


 
   
  console.log('cargada');
  }


 cerrarModal(datos:any){
 // this.datos = datos;

  console.log(this.formModal);

    }

    abrirmodal(){
     // return this.formModal.show();
    }
}
