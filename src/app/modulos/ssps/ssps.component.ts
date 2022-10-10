import { Component, OnInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-ssps',
  templateUrl: './ssps.component.html',
  styleUrls: ['./ssps.component.css']
})
export class SspsComponent implements OnInit {
  
  sspsl:any;
  sspsh:any;

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
  }


  cerrarmodal(){
  this.sspsl.hide();
  
  }

  nextssspl(){
    this.sspsl.hide();
    this.sspsh.show();
  
  }

  
}
