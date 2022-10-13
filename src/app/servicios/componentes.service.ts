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

/*validaciones de formularios listas negras campo personalizado nigito verificacion*/

codigonit( tipo:string,codigo:string,){
         
  return (formGroup: AbstractControl): ValidationErrors  | null => {
      
    const codigo1 = formGroup.get(codigo).value;
    const tipo1 = formGroup.get(tipo).value;

    if( tipo1 =="NIT" && codigo1 == null){

      formGroup.get(codigo).setErrors({ sincodigo: true });
        return {sincodigo:true}

  
   }
    formGroup.get(codigo).setErrors(null);
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




