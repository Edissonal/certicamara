import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ComponentesService } from '../../../../domain/servicios/componentes.service';
import { SspsService } from '../../../../domain/servicios/ssps.service';


@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

 formaForm!: FormGroup;
 indicativos: any[];
 codindi: any;
 codigo:any;
 depar:any[] =[];
 muni:any[] =[];
 munifi:any[]=[];
 comas:boolean;
comastel:boolean= false;
comastel2:boolean= false;
comastex:boolean= false;
entrega:any;

  
  constructor( private router: Router,
               private fb: FormBuilder,
               private componentesService: ComponentesService,
               private changeDetector: ChangeDetectorRef,
               private ssps: SspsService,
           ) { 

                this.formaForm = this.fb.group({
                  direccionp: ['',[
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(200),]],
                  departamento: ['',[Validators.required]],
                  municipio: ['',[Validators.required]],
                  celular: ['',[
                            Validators.required,
                            Validators.min(999999999),
                            Validators.max(9999999999)
                              ]],
                  indicativo: [],
                  telefono: ['', [Validators.required,
                    Validators.min(999999999),
                    Validators.max(9999999999)
                    ]],
                    extenxion: [0, [
                      Validators.required,
                      Validators.min(99999),
                      Validators.max(999999)
                  ]],
              
                },{validators:[this.componentesService.validalist('indicativo')]});


              }

  ngOnInit(): void {
    this.departamentos();
    this.OnChanges();
    this.indicativo();
    this.entrega = JSON.parse(localStorage.getItem('entregaf'));
    let cedula =  JSON.parse(localStorage.getItem('cedula'));
    /*validaciones de entrega de de tados crm*/
    this.ssps.crmentregaf(cedula)
    .subscribe((res:any)=>{
   //  console.log(this.entrega);
      let [datos,otros] = res; 
      //console.log(res); 

    if(!Array.isArray(res)||res.length === 0){return;}
    else if(res.length > 0){
   
      const nulo = Object.values(this.entrega).every(x => x === null || x === '');

      if(nulo == true){
              Object.assign(this.entrega, datos);
              localStorage.setItem("entregaf", JSON.stringify(this.entrega));
                 
                }

    }
    
    });
  }

  
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }


  departamentos(){
  
    this.ssps.departamentos()
    .subscribe((res:any)=>{
      this.muni = res;
      this.depar = [...new Map(this.muni.map(item => [item['Departamento'], item])).values()];
   });
     
  }

  OnChanges(){
    this.formaForm.valueChanges.subscribe(valores=>{
    
      let valor:number = valores.municipio;
    

      this.munifi = this.muni.filter(function(obj:any, index){
        return obj.codigo_dep == valor;
        
      })
  
    //  console.log(this.munifi);

    
    });
  }


  redireciona(){
   
    this.router.navigate(['/flujo/contacto']);
    this.componentesService.emitircambio("revecontacto");
  
  }

/* funcion para los errores indicados*/
camposvalidos(campo: any) {
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}


   /*funcion que hace el filtro de los elementos selecionados del select*/
   verficacion(event) {

    //console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
    this.entrega.indicativo =  this.codindi?.indicativo;
  }

/*Implementacion de validaciones de coma*/


     noPuntoComa( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comas = res;
      
      })
      
       }


       noPuntotel( event ) {

        this.componentesService.commas(event)
        .subscribe((res: any) => {
        
         this.comastel = res;
        
        })
        
     
      }
  


/*quitar numeros ceros a la izquierda*/
quitarceros(numero){

  this.entrega.celular = numero.replace(/^0+/, '');

  }

  quitarceros2(numero){

    this.entrega.extenxion2 = numero.replace(/^0+/, '');
  
    }
  
  quitarceros3(numero){

      this.entrega.telefono = numero.replace(/^0+/, '');
    
      }
        

/*funcion para el envio de datos*/
ngsubmit() {

  if (this.formaForm.invalid) {
    this.formaForm.markAllAsTouched();
    return;
  }

    let valoresfi = this.formaForm.value;
      localStorage.setItem("entregaf", JSON.stringify(valoresfi));
        this.router.navigateByUrl('/flujo/facturacion');
        this.componentesService.emitircambio("facturacionf");
        
}  

    /*carga datos select*/
    indicativo() {

      this.ssps.inicativos()
        .subscribe((res: any) => {
          this.indicativos = res;
        });
  
    }

    instalaciones($event){
      let isCheckeado = $event.target.checked;
      if(isCheckeado){
      this.router.navigateByUrl('/flujo/instalaciones');
    }
    
    }

    
prueba(){
  this.router.navigateByUrl('/flujo/instalaciones');
}


}
