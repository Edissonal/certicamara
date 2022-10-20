import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, FormArray, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {
  private datos: any | undefined;
  formModal: any | undefined;
  acuerdos: any | undefined;
  acuerdos2: any | undefined;
  acuerdos3: any | undefined;
  estados:boolean =false;
  rutas:string;


  constructor() {

    console.log('cargada servicio');
    console.log(this.estados);

  }

  /*implementacion de validaciond e modals */
  abrirmodal() {
    console.log('model desde servicio');
    console.log(this.formModal);

    this.formModal.show();
  }

  cerrarModal() {
    // this.datos = datos;

    console.log(this.formModal);
    this.formModal.hide();

  }

  terminos() {
    console.log(this.acuerdos);
    this.acuerdos.show();


  }

  terminos1(){
  
    console.log(this.acuerdos2);
    this.acuerdos2.show();

  }

  terminos2(){
  
    console.log(this.acuerdos3);
    this.acuerdos3.show();

  }

/*validaciones de formularios listas negras campo personalizado validacion de cedula*/

codigonit( tipo:string,numero:string){
         
  return (formGroup: AbstractControl): ValidationErrors  | null => {
      

    const tipo1 = formGroup.get(tipo).value;
    const numero1 = formGroup.get(numero).value;
    let palabras = alfanumertico(numero1);
    let numerosolo = /^[0-9]+$/;

    
    console.log(palabras);

    function alfanumertico(str) {
      return /^[A-Za-z0-9]*$/.test(str);
    }


    if( tipo1 =='Pasaporte' && palabras == false ){
      
      formGroup.get(numero).setErrors({ sincodigo: true });
   return {sincodigo:true}

   }

   if(  numero1.length <= 3 || numero1.length >10  || numero1 == ""){
      
    formGroup.get(numero).setErrors({ sincodigo: true });
    return {sincodigo:true}

 }
 
 if( tipo1 =='Cédula de Ciudadanía' && !numero1.match(numerosolo)|| tipo1 =='Cédula de Extranjería' && !numero1.match(numerosolo) || tipo1 =="" && !numero1.match(numerosolo)){
      
  formGroup.get(numero).setErrors({ sincodigo: true });
  return {sincodigo:true}

}
  

   formGroup.get(numero).setErrors(null);
   return null;

  
  }
      
      }


/*implementacion de validaciones de minimo una politica debe estar selecionada en el slide de politcas a selecionar modulos ssps*/

/*validador si el check es mayor a uno*/
validar(min = 1) {
  const validator: ValidatorFn = (formArray: AbstractControl) => {
    if (formArray instanceof FormArray) {
      const totalSelected = formArray.controls
        .map((control) => control.value)
        .reduce((prev, next) => (next ? prev + next : prev), 0);
      return totalSelected <= 1 ? null : { required: true };


    }

    throw new Error('formArray no es una instancia  de FormArray');
  };

  return validator;
}




  /*funcion de checks minimos uno*/
  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: AbstractControl) => {
      if (formArray instanceof FormArray) {
        const totalSelected = formArray.controls
          .map((control) => control.value)
          .reduce((prev, next) => (next ? prev + next : prev), 0);
        return totalSelected >= min ? null : { required: true };
      }

      throw new Error('formArray no es una instancia  de FormArray');
    };

    return validator;
  }


}




