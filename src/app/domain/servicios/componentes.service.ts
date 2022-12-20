import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, FormArray, ValidatorFn, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComponentesService {
  private datos: any | undefined;
  formModal: any | undefined;
  estados:boolean =false;
  rutas:string;
  myGuid = uuidv4();
  enviodata:any = false;




   // declaracion de sujeto para multiples observables  Fuentes de cadenas observables
  private  envios = new Subject<any>();
  // Flujos de cadenas observables
  // Observable de tipo string 
  eventos$ = this.envios.asObservable();
  // Comandos de mensajes de servicio


  constructor() {

    console.log('cargada servicio');
    console.log(this.estados);
    console.log(this.myGuid);
   // console.log(this.tipocliente);

  }

  /*implementacion de validaciond e modals */
  abrirmodal() {
    console.log('model desde servicio');
    console.log(this.formModal);

    this.formModal.show();
  }

  cerrarModal() {
    // this.datos = datos;

//    console.log(this.formModal);
    this.formModal.hide();

  }



  /*emicion de eventos flujo de compra*/

  emitircambio(change: any) {
    this.envios.next(change);
}

/*validaciones de formularios listas negras campo personalizado validacion de cedula*/

codigonit( tipo:string,numero:string){
         
  return (formGroup: AbstractControl): ValidationErrors  | null => {
      

    const tipo1 = formGroup.get(tipo).value;
    const numero1 = formGroup.get(numero).value;
    let num = +numero1;

    
    //let palabras = alfanumertico(numero1);
    let numerosolo = /^[0-9]+$/;
    const str = String(numero);
    var numeros = /^0[0-9].*$/



         var valida = new RegExp("([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*");
        //  console.log(valida.test(numero1));



    if( tipo1 =='pa' && valida.test(numero1) == false || num == 0){
      
      formGroup.get(numero).setErrors({ sincodigo: true });
   return {sincodigo:true}

   }

   if(  numero1.length <= 3 || numero1.length >10  || numero1 == ""  ){
      
    formGroup.get(numero).setErrors({ sincodigo: true });
    return {sincodigo:true}

 }
 
 if( tipo1 =='cc' && !numero1.match(numerosolo)|| tipo1 =='ce' && !numero1.match(numerosolo) || tipo1 =="" && !numero1.match(numerosolo) || numeros.test(str)){
      
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

  /*validar si los corrreos son iguales modulo info basica ssps*/

  soniguales(campo1: string, campo2: string) {
  
    return (formGroup: AbstractControl): ValidationErrors | null => {
      
      const correo = formGroup.get(campo1).value;
      const correo1 = formGroup.get(campo2).value;

      if (correo !== correo1 ||  correo1 == "" ) {
        formGroup.get(campo2).setErrors({ noiguales: true });
        return {noiguales:true}
      }
      
      formGroup.get(campo2).setErrors(null);
       return null;
    }

    /* Validador de datalist*/
    
  }

  validalist(indicativo:string){
    return (formGroup: AbstractControl): ValidationErrors  | null => {
      

  const indi = formGroup.get(indicativo).value;
  let numerosolo = /^[0-9]+$/;
  let valida = new RegExp("[a-zA-Z][a-zA-Z ]+");
  var numlet = new RegExp("([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*");
  let comas = /^[0-9,]*$/g;

 // console.log(comas.test(indi)); // true
  //onsole.log(indi);

 
  if( indi  == undefined || indi.length < 5 || numerosolo.test(indi) == false){
        

    formGroup.get(indicativo).setErrors({ vacioindi: true });
    return {vacioindi:true}
  
  }
    
     formGroup.get(indicativo).setErrors(null);
     return null;
  
    
    }
      

  
  }



  validadigito(indicativo:string){
    return (formGroup: AbstractControl): ValidationErrors  | null => {
      
 
  const indi = formGroup.get(indicativo).value;

  function getNumberLength(num) {
    return Math.ceil(Math.log10(num + 1));
  }

  //let valor = getNumberLength(indi);
  // console.log(valor);



  const str = String(indi);
  console.log( typeof str);
   var numeros = /^0[0-9].*$/

   if(numeros.test(str)){
  
    console.log("cumple");

  }else{
    console.log("no cumple");

  }
 //  console.log(numeros.test(`${str}`)); // true
  // console.log( typeof str);




  if(   indi >9  || indi == "" || indi == null){
        
    formGroup.get(indicativo).setErrors({ vacioindi: true });
    return {vacioindi:true}
  
  }
    
  
     formGroup.get(indicativo).setErrors(null);
     return null;
  
    
    }

    

    
  
  }



  minimos(numero:string){
    return (formGroup: AbstractControl): ValidationErrors  | null => {
      
  let numerosolo = /^[0-9]+$/;
  const indi = formGroup.get(numero).value;
  const numeros = String(indi);

   let comas = /[^.,]/;

  
  function getNumberLength(num) {
    return Math.ceil(Math.log10(num + 1));
  }

  let valor = getNumberLength(indi);
   // console.log(comas.test(numeros));
   //console.log(indi);
 

  if(   valor <4   || valor >11 || indi == "" || indi == null ||!numeros.match(indi) ){
        
    formGroup.get(numero).setErrors({ vacioindi: true });
    return {vacioindi:true}
  
  }
    
  
     formGroup.get(numero).setErrors(null);
     return null;
  
    
    }
      


  
  }

/*validacion de direcciones*/
  
  minimosd(numero:string){
    return (formGroup: AbstractControl): ValidationErrors  | null => {
      
      let numerosolo = /^[0-9]+$/;
      const indi = formGroup.get(numero).value;
      const numeros = String(indi);
    
      let valida = new RegExp("^[^,]+$");
    
 
      function getNumberLength(num) {
        return Math.ceil(Math.log10(num + 1));
      }
    
      let valor = getNumberLength(indi);

     //  console.log(indi);
     
    
      if(   valor <1  || valor >3 || indi == "" || indi == null ||!numeros.match(indi) ){
            
        formGroup.get(numero).setErrors({ vacioindi: true });
        return {vacioindi:true}
      
      }
        
         formGroup.get(numero).setErrors(null);
         return null;
      
        
        }
          
    
  }


  //minismos calles direciones  
  minimosc(numero:string){
    return (formGroup: AbstractControl): ValidationErrors  | null => {
      
      let numerosolo = /^[0-9]+$/;
      const indi = formGroup.get(numero).value;
      const numeros = String(indi);
    
       let comas = /[^.,]/;
    
      
      function getNumberLength(num) {
        return Math.ceil(Math.log10(num + 1));
      }
    
      let valor = getNumberLength(indi);
      //    console.log(comas.test(numeros));
     //  console.log(indi);
     
    
      if(   valor <1  || valor >10 || indi == "" || indi == null ||!numeros.match(indi) ){
            
        formGroup.get(numero).setErrors({ vacioindi: true });
        return {vacioindi:true}
      
      }
        
      
         formGroup.get(numero).setErrors(null);
         return null;
      
        
        }
          
    

}

//validaciones de commas
commas(event){

  var e = event || window.event;
  var key = e.keyCode || e.which;

  let respuesta;

  if ( key === 110 || key === 190 || key === 188 ) {     
   
//    this.comasnit = true;
return of(true);

  }else{
  //  this.comas = false;
  return of(false);
   
  }

}
        


//validaciones de codigo actividad economica

 economica(numero:string){
  return (formGroup: AbstractControl): ValidationErrors  | null => {
    
    let numerosolo = /^[0-9]+$/;
    const indi = formGroup.get(numero).value;
    const numeros = String(indi);
    
    
    function getNumberLength(num) {
      return Math.ceil(Math.log10(num + 1));
    }
  
    let valor = getNumberLength(indi);

   
  
    if(   valor <1  || valor >5 || indi == "" || indi == null ||!numeros.match(indi) ){
          
      formGroup.get(numero).setErrors({ vacioindi: true });
      return {vacioindi:true}
    
    }
      
    
       formGroup.get(numero).setErrors(null);
       return null;
    
      
      }
        


}

/*validacion de objetos servicio*/

comparacion(usu:any,datos:any){
  console.log(datos);
  console.log(usu);

  const shallowComparison = Object.keys(usu).length === Object.keys(datos).length &&
  (Object.keys(usu) as (keyof typeof usu)[]).every((key) => {
    return (
      Object.prototype.hasOwnProperty.call(datos, key) && usu[key] === datos[key]
    );
  });
  
  return shallowComparison;
}



}



