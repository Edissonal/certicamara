import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SspsService {

  url = 'http://localhost:3000';


  constructor(private http:HttpClient) { }



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


}
