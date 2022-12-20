import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { SspsAdapterService } from '../../infraestucture/driven-adapter/ssps-adapter.service';


@Injectable({
  providedIn: 'root'
})
export class SspsService {




    // declaracion de sujeto para multiples observables  Fuentes de cadenas observables
    private  envios = new Subject<any>();
    // Flujos de cadenas observables
    // Observable de tipo string 
    eventos$ = this.envios.asObservable();
    // Comandos de mensajes de servicio
  
  
  

  constructor(private http:HttpClient,
              private sspsEx:SspsAdapterService) {  
  
  }


  /*emicion de eventos flujo de compra*/

    eventos(change: any) {
    this.envios.next(change);
}
  getpreguntas() {
  //  return this.http.get(`${ this.url}/preguntas`);
       return this.sspsEx.getpreguntasExt();
  }

  historial(termino:any){
  //  return this.http.get(`${ this.url}/historial?q=${termino}`);
  return this.sspsEx.historialExt(termino);
  }


  politicas(){
    return this.sspsEx.politicasEx();
  }

  reportados(termino:any){
    //return this.http.get(`${ this.url}/reportados?q=${termino}`);
    return this.sspsEx.reportadosEx(termino);
  }

politica(termino:any){
//    return this.http.get(`${ this.url}/politicas?q=${termino}`);
return this.sspsEx.politicaExt(termino);
  }

  
  precios(){
   // return this.http.get(`${ this.url}/precios`);
   return this.sspsEx.preciosEx();
  }

  inicativos(){
   // return this.http.get(`${ this.url}/indicativos`);
   return this.sspsEx.indicativoExt();
  }


nopedido(){
  //return this.http.get(`${ this.url}/nopedido`);
  return this.sspsEx.nopedidoExt();
}


nodescuentop(termino:string){
  console.log(termino);
  
  //return this.http.get(`${ this.url}/descuentos/?q=${termino}`);
  return this.sspsEx.nodescuentopEx(termino);
}


nodradicado(){
  return this.sspsEx.nodradicadoEx();
  //return this.http.get(`${ this.url}/noradicado`);
}


ordencambio(){
  return this.sspsEx.ordencambioEx();
  //return this.http.get(`${ this.url}/documento`);
}


crm(termino:string){
  return this.sspsEx.crmEx(termino);
 // return this.http.get(`${ this.url}/crmusuario/?q=${termino}`);
}


crmcontacto(termino:string){
  return this.sspsEx.crmcontactoExt(termino);
  //return this.http.get(`${ this.url}/crmcontacto/?q=${termino}`);

}

crentrega(termino){
  return this.sspsEx.crentregaExt(termino);
//  return this.http.get(`${ this.url}/crmentrega/?q=${termino}`);
}


crmfacturacion(termino){
  return this.sspsEx.crmfacturacionEx(termino);
 // return this.http.get(`${ this.url}/crmfacturacion/?q=${termino}`);
}


crmentregaf(termino){
  return this.sspsEx.crmentregafex(termino);
//  return this.http.get(`${ this.url}/crmentregaf/?q=${termino}`);
}


departamentos(){
  return this.sspsEx.departamentosEx();
//  return this.http.get("../../../assets/json/Tablas_Parametricas.json");
}


}
