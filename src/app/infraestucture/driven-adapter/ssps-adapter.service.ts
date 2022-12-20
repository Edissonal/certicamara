import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SspsAdapterService {

  constructor(private http:HttpClient) { }

  
  url = 'http://localhost:3000';

  getpreguntasExt(){
    return this.http.get(`${ this.url}/preguntas`);
  
  }

  historialExt(termino){
    return this.http.get(`${ this.url}/historial?q=${termino}`);
  }

  politicasEx(){
    return this.http.get(`${ this.url}/politicas`);
  }

  reportadosEx(termino){
    return this.http.get(`${ this.url}/reportados?q=${termino}`);
  }

  politicaExt(termino){
    return this.http.get(`${ this.url}/politicas?q=${termino}`);
  }

  preciosEx(){
    return this.http.get(`${ this.url}/precios`);
  }

  indicativoExt(){
    return this.http.get(`${ this.url}/indicativos`);
  }

  nopedidoExt(){
    return this.http.get(`${ this.url}/indicativos`);
  }

  nodescuentopEx(termino:string){
    return this.http.get(`${ this.url}/descuentos/?q=${termino}`);
  }

  nodradicadoEx(){
    return this.http.get(`${ this.url}/noradicado`);
  }

  ordencambioEx(){
    return this.http.get(`${ this.url}/documento`);
  }

  crmEx(termino:string){
    return this.http.get(`${ this.url}/crmusuario/?q=${termino}`);

  }

  crmcontactoExt(termino:string){
    return this.http.get(`${ this.url}/crmcontacto/?q=${termino}`);
  }

  crentregaExt(termino:string){
    return this.http.get(`${ this.url}/crmentrega/?q=${termino}`);
  }

  crmfacturacionEx(termino:string){
    return this.http.get(`${ this.url}/crmfacturacion/?q=${termino}`);
  }

  crmentregafex(termino:string){
    return this.http.get(`${ this.url}/crmentregaf/?q=${termino}`);
}

departamentosEx(){
  return this.http.get("../../../assets/json/Tablas_Parametricas.json");
}
  

  }

