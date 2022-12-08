import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
import { SspsService } from '../../../servicios/ssps.service';
import { Empresa } from '../../../interfaces/empresa.interface';
import { ObjetosService } from '../../../servicios/objetos.service';

@Component({
  selector: 'app-datosempresa',
  templateUrl: './datosempresa.component.html',
  styleUrls: ['./datosempresa.component.css']
})
export class DatosempresaComponent implements OnInit {

formaForm!:FormGroup;
usuario: any;
comas:boolean= false;
comasecnomi:boolean= false;
comastel:boolean= false;
comastel2:boolean= false;
comastex:boolean= false;
empresa? :Empresa;
indicativos: any[];
depar:any[] =[];
codindi: any;
muni:any[] =[];
munifi:any[]=[];


  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
              private ssps: SspsService,
              private objetosService:ObjetosService,
              private changeDetector: ChangeDetectorRef) { 
  
   /*validacion de campos validators*/
   this.formaForm = this.fb.group({
    razon:['',[Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(60),
                  Validators.pattern("[a-zA-Z ]{2,254}")]],
    direccionp:['',[
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(200),]],
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
    celular:['',
              [
                Validators.required,
                Validators.min(999999999),
                Validators.max(9999999999)
                          ]],
              
    correo: ['', [Validators.required,
                  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
                  Validators.maxLength(60),
                          ]],
        departamento: ['',[Validators.required]],
        municipio: ['',[Validators.required]],
 
  },{validators:[
                 this.componentesService.validalist('indicativo')
    ]}
  
  );   
 

}
  

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')); 
    this.empresa = JSON.parse(localStorage.getItem('dempresa'));
    this.departamentos();
    this.OnChanges();
    this.indicativo();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }





  ngsubmit() {

    if(this.formaForm.invalid){
      this.formaForm.markAllAsTouched();
      return;
     }
     let valoresfi = this.formaForm.value;
  
     localStorage.setItem("dempresa", JSON.stringify(valoresfi));
     this.componentesService.emitircambio("infoperso");
     this.router.navigate(['/flujo/contacto']);
    }


    /* funcion para validacion de campos*/
    camposvalidos(campo:any){
      return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
    }

     /*validacion de decimales input*/

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


noPuntote( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comastel2 = res;
      
      })
    }

noPuntoex( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comastex = res;
      
      })
    }

  
    noPuntoComacod( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comas = res;
      
      })
      
    }
    
    
    noPuntoComaeconomi( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comasecnomi = res;
      
      })
      
    }
    
    

/*quitar numeros ceros a la izquierda*/

  quitarceros2(numero){

    this.empresa.telefono = numero.replace(/^0+/, '');
  
    }
  
  quitarceros3(numero){

      this.empresa.extenxion = numero.replace(/^0+/, '');
    
      }
        
quitarceros4(numero){

        this.empresa.celular = numero.replace(/^0+/, '');
      
        }
          
      /*funcion que hace el filtro de los elementos selecionados del select*/
      verficacion(event) {

         console.log(event.target.value);
         this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
         this.empresa.indicativo =  this.codindi?.indicativo;
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
    
      /*carga datos select*/
      indicativo() {

        this.ssps.inicativos()
          .subscribe((res: any) => {
            this.indicativos = res;
          });
    
      }

      
  }