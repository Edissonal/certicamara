import { Injectable } from '@angular/core';
import { Empresa } from '../interfaces/empresa.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

 contacto={
    nombres:'',
    apellidos:'',
    cargo:'',
    correo:'',
    celular:'',
    indicativo:'',
    telefono:'',
    extenxion:''

  }
  
  entrega ={
    direccionp:'',
    departamento:'',
    municipio:'',
    celular:'',
    indicativo:'',
    telefono:'',
    extenxion:'',
  
  }
  instalaciones ={
    correo:'',
  }

  facturacion ={
  
    nit:'',
    razon:'',
    direccionp:'',
    indicativo:'',
    telefono:'',
    extenxion:'',
    celular:'',
    correo:'',
    capital:'',
    regimentributario:'',
    codigo:'',
  
  }

  entregan ={
    correo:'',
    telefono:'',
    extenxion:'',
    indicativo:''
  }

  empresa:Empresa ={
    razon:'',
    direccionp:'',
    indicativo:null,
    code:null,
    telefono:null,
    celular:null,
    extenxion:null,
    correo:'',
    departamento:'',
    municipio:''
  
  }




  constructor() { }
/*asignacion de objetos en local storage*/
  virtualn(){
    localStorage.setItem("contacto", JSON.stringify(this.contacto));
    localStorage.setItem("entrega", JSON.stringify(this.entregan));
    localStorage.setItem("facturacion", JSON.stringify(this.facturacion));
  
  }

  /*asignacion de objetos en local storage*/
  fisicon(){
    localStorage.setItem("contacto", JSON.stringify(this.contacto));
    localStorage.setItem("entregaf", JSON.stringify(this.entrega));
    localStorage.setItem("instalaciones", JSON.stringify(this.instalaciones));
    localStorage.setItem("facturacion", JSON.stringify(this.facturacion));
  
  }

  jvirtual(){
    localStorage.setItem("dempresa", JSON.stringify(this.empresa));
    localStorage.setItem("contacto", JSON.stringify(this.contacto));
  
  }

  
}
