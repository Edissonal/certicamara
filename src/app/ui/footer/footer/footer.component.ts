import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tamano!:number;

  constructor() { }


  ngOnInit(): void {

}
//calculo de resolucion de pantalla
onResize(event:any) {
this.tamano =event.target.innerWidth;
}

//apliacion de de estilo deacuerdo a resolucion
validar(){

  return (this.tamano <= 867) ? 'col-lg-2 col-md-3 col-sm-6 col-xs-6': 'margen';
}


}