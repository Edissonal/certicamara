import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SspsService {

  url = '../../assets/json/datos.json';

  constructor(private http:HttpClient) { }



  getsede() {
    return this.http.get(this.url);
  }
}
