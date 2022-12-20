import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentesService } from '../../../domain/servicios/componentes.service';
declare var window: any;

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent implements OnInit {



 estados:boolean=false;
 rutas:any;

  constructor(private fb:FormBuilder,
              private componentesService:ComponentesService,
              private activateRoute:ActivatedRoute,
              private router:Router) { 

                    /*captura de rutas activas*/
                    this.activateRoute.queryParams
                    .subscribe((res:any)=>{
              

                   // localStorage.setItem('rutasActivas',res.route);
                   if(res.route == undefined){
                     return;
                  }else{
                  
                    localStorage.setItem('rutasActivas',res.route);
                    //this.componentesService.rutas =res.route;
                  }
                  //    this.rutas=res.route;
                      console.log(this.rutas);
    
                    });

               
  }



  ngOnInit(): void {
/*implementacion de modals a servicio componentes*/
    this.componentesService.formModal = new window.bootstrap.Modal(
    
      document.getElementById('principal')
     );




     this.mostrarevento();
     

     
  }

/*implementacion eventos modal */
abrirmodal() {

  console.log('log abre');
  this.componentesService.abrirmodal();
}


mostrarevento(){
  let evento = this.componentesService.estados;

  if(evento){
    this.componentesService.abrirmodal();
    this.componentesService.estados = false;
  }
}

}
