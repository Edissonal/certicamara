import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
import { SspsService } from '../../../servicios/ssps.service';

@Component({
  selector: 'app-datos-facturacion',
  templateUrl: './datos-facturacion.component.html',
  styleUrls: ['./datos-facturacion.component.css']
})
export class DatosFacturacionComponent implements OnInit {

formaForm!:FormGroup;
usuario: any;
comas:boolean= false;
comasnit:boolean= false;
comasecnomi:boolean= false;
comastel:boolean= false;
comastel2:boolean= false;
comastex:boolean= false;
indicativos: any[];
codindi: any;
codigo:any;
facturacion :any;
envio:any[]=[];



  constructor(private fb:FormBuilder,
              private router:Router,
              private componentesService:ComponentesService,
              private ssps: SspsService,
              private changeDetector: ChangeDetectorRef) {
       
      /*validacion de campos validators*/
      this.formaForm = this.fb.group({
        nit:[0,[]],
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
                                Validators.minLength(8),
                                Validators.maxLength(60),
                              ]],
        capital:['',[Validators.required]],
        regimentributario:['',[Validators.required]],
        codigo:[0,[]],
     
      },{validators:[this.componentesService.minimos('nit'),
                     this.componentesService.validalist('indicativo'),
                     this.componentesService.economica('codigo')

        ]}
      
      );    
  
  }

    /* funcion para validacion de campos*/
camposvalidos(campo:any){
  return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
}


//implementacion de validacion de comas


ngsubmit() {

  if(this.formaForm.invalid){
    this.formaForm.markAllAsTouched();
    return;
   }

   const valoresfi = this.formaForm.value;
   localStorage.setItem("facturacion", JSON.stringify(valoresfi));
   
   let usuario = JSON.parse(localStorage.getItem('usuario'));
      
   if(usuario.cliente == "natural"){   
   
   let contacto = JSON.parse(localStorage.getItem('contacto'));
   let facturacion = JSON.parse(localStorage.getItem('facturacion'));
   let entrega = JSON.parse(localStorage.getItem('entrega')); 
  // this.envio.push(contacto,facturacion,entrega);
   this.envio.push({contacto:[contacto]},{facturacion:[facturacion]},{entrega:[entrega]});
   console.log(this.envio);

  }

  if(usuario.cliente == "juridica"){   

  let facturacion = JSON.parse(localStorage.getItem('facturacion'));
  let contacto = JSON.parse(localStorage.getItem('contacto'));
  let entrega = JSON.parse(localStorage.getItem('entregaf')); 
  let instalaciones = JSON.parse(localStorage.getItem('instalaciones')); 
  this.envio.push({contacto:[contacto]},{facturacion:[facturacion]},{entrega:[entrega]},{instalaciones:[instalaciones]});
  console.log(this.envio);
}
   this.router.navigate(['/flujo/pago']);
   this.componentesService.emitircambio("pagos"); 
  /*emite orden de cambio para alerta y cambios de precios*/
   this.componentesService.emitircambio("mostrarordencambio");
  }

  ngOnInit(): void {

  //  this.cargarDataAlFormulario();
    this.datosinfo();
    this.indicativo();
    this.facturacion = JSON.parse(localStorage.getItem('facturacion'));
    let cedula =  JSON.parse(localStorage.getItem('cedula'));

    /*validaciones de entrega de de tados crm*/
    this.ssps.crmfacturacion(cedula)
    .subscribe((res:any)=>{
    // console.log(this.facturacion);
      let [datos,otros] = res; 
     // console.log(res); 

    if(!Array.isArray(res)||res.length === 0){return;}
    else if(res.length > 0){
   
      const nulo = Object.values(this.facturacion).every(x => x === null || x === '');

      if(nulo == true){
              Object.assign(this.facturacion, datos);
              localStorage.setItem("facturacion", JSON.stringify(this.facturacion));
                 
                }

    }

    
    });



  }



  datosinfo(){
  
    this.usuario = JSON.parse(localStorage.getItem('usuario')); 
    //console.log(this.usuario.costo);
  
  }

  /*rediociona al usuario si se equivova*/
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  

      /*carga datos select*/
      indicativo() {

        this.ssps.inicativos()
          .subscribe((res: any) => {
            this.indicativos = res;
          });
    
      }
      /*funcion que hace el filtro de los elementos selecionados del select*/
  verficacion(event) {

   // console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
    this.facturacion.indicativo =  this.codindi?.indicativo;
  }

    /*validacion de decimales input*/
    noPuntoComa( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comasnit = res;
      
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
quitarceros(numero){

  this.facturacion.nit = numero.replace(/^0+/, '');
  }

  quitarceros2(numero){

    this.facturacion.telefono = numero.replace(/^0+/, '');
  
    }
  
  quitarceros3(numero){

      this.facturacion.extenxion = numero.replace(/^0+/, '');
    
      }
        
quitarceros4(numero){

        this.facturacion.celular = numero.replace(/^0+/, '');
      
        }
          
  



  /*rediociona al usuario si se equivova*/
  redireciona() {

    if (this.usuario.dispo == "token virtual") {

      this.router.navigate(['/flujo/entregan']);
      this.componentesService.emitircambio("reveentregan");

    } else if (this.usuario.dispo == "token fisico") {

      this.router.navigate(['/flujo/entrega']);
      this.componentesService.emitircambio("entregarf");

    }

    //  this.router.navigate(['/flujo/entregan']);
     // this.componentesService.emitircambio("reveentregan");




  }


}
