import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SspsService {

  url = 'http://localhost:3000';


<<<<<<< HEAD

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
    // declaracion de sujeto para multiples observables  Fuentes de cadenas observables
    private  envios = new Subject<any>();
    // Flujos de cadenas observables
    // Observable de tipo string 
    eventos$ = this.envios.asObservable();
    // Comandos de mensajes de servicio
  
  
  

  constructor(private http:HttpClient) {  
  
  }


  /*emicion de eventos flujo de compra*/

    eventos(change: any) {
    this.envios.next(change);
}
  getpreguntas() {
    return this.http.get(`${ this.url}/preguntas`);
  }

  historial(termino:any){
    return this.http.get(`${ this.url}/historial?q=${termino}`);
  }

  politicas(){
    return this.http.get(`${ this.url}/politicas`);
  }

  reportados(termino:any){
    return this.http.get(`${ this.url}/reportados?q=${termino}`);
  }


  politica(termino:any){
    return this.http.get(`${ this.url}/politicas?q=${termino}`);
  }

  precios(){
    return this.http.get(`${ this.url}/precios`);
  }

  
  inicativos(){
    return this.http.get(`${ this.url}/indicativos`);
  }


nopedido(){
  return this.http.get(`${ this.url}/nopedido`);
}


nodescuentop(termino){
  console.log(termino);
  return this.http.get(`${ this.url}/descuentos/?q=${termino}`);
}


<<<<<<< HEAD
nodradicado(){
  return this.http.get(`${ this.url}/noradicado`);
}


ordencambio(){
  return this.http.get(`${ this.url}/documento`);
}

crm(termino){
  return this.http.get(`${ this.url}/crmusuario/?q=${termino}`);
}


crmcontacto(termino){
  return this.http.get(`${ this.url}/crmcontacto/?q=${termino}`);

}
crentrega(termino){
  return this.http.get(`${ this.url}/crmentrega/?q=${termino}`);
}

crmfacturacion(termino){
  return this.http.get(`${ this.url}/crmfacturacion/?q=${termino}`);
}

crmentregaf(termino){
  return this.http.get(`${ this.url}/crmentregaf/?q=${termino}`);
}







departamentos(){
  return this.http.get("../../../assets/json/Tablas_Parametricas.json");
}


=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
}
