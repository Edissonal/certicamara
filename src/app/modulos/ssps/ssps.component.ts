import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var window: any;
declare var bootstrap: any;

@Component({
  selector: 'app-ssps',
  templateUrl: './ssps.component.html',
  styleUrls: ['./ssps.component.css']
})
export class SspsComponent implements OnInit {
  
  sspsl:any;
  sspsh:any;
  valores:'';
  constructor() { } 

  /*implementacion de modal listas */
  ngOnInit(): void {

    this.sspsl = new window.bootstrap.Modal(
    
      document.getElementById('ssps1')
     );
   
    /*this.sspsh = new window.bootstrap.Modal(('#ssps2')
     );

*/
     this.sspsl.show();
    
     /*implementacion de alertas*/
     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
       return new bootstrap.Tooltip(tooltipTriggerEl)
     })
     
  }

/*implementacion de modal ssps*/
  cerrarmodal(){
  this.sspsl.hide();
  
  }

/*validar los checks*/

validar(){

}

datos(){
console.log(this.valores);
}

}

  

