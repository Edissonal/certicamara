import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flujocomprassps',
  templateUrl: './flujocomprassps.component.html',
  styleUrls: ['./flujocomprassps.component.css']
})
export class FlujocomprasspsComponent implements OnInit {

  @ViewChild('margen', { read: ElementRef, static:false }) margen: ElementRef;
  tamano!:number;
  compras;
  constructor() { }

  ngOnInit(): void {

    this.compras = JSON.parse(localStorage.getItem('usuario'));
     
    if(this.compras.cantidad == null && this.compras.cliente =="natural" ){
       this.compras.cantidad =1;
       console.log(this.compras);
    }
  
  }

  onResize(event:any) {
    this.tamano =event.target.innerWidth;

    if(this.tamano <= 984){
      this.margen.nativeElement.classList.remove('row-margenes');
    }else{
      this.margen.nativeElement.classList.add('row-margenes');
    }

    }


}
