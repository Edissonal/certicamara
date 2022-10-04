import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-certimail-home',
  templateUrl: './certimail-home.component.html',
  styleUrls: ['./certimail-home.component.css']
})
export class CertimailHomeComponent implements OnInit {

  constructor(private router:Router) { }

  formModal: any;



  ngOnInit(): void {

    
      this.formModal = new window.bootstrap.Modal(
    document.getElementById('exampleModal')
  
  );
   

  }



  /*cerra Modal*/ 
  abrirmodal() {
    this.formModal.show();
   
   // this.router.navigate(['planes']);



  }
  
}
