import { ChangeDetectorRef, Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup, ValidatorFn, AbstractControl, FormArray, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { SspsService } from '../../servicios/ssps.service';
import { ComponentesService } from '../../servicios/componentes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjetosService } from '../../servicios/objetos.service';
declare var window: any;
declare var bootstrap: any;

@Component({
  selector: 'app-ssps',
  templateUrl: './ssps.component.html',
  styleUrls: ['./ssps.component.css']
})
export class SspsComponent implements OnInit {


  sspsl: any;
  sspsh: any;
  valores: '';
  listadop: any[] = [];
  directiva: any[] = [];
  compras:any[] =[];
  formaForm: FormGroup;
  formaForm2: FormGroup;
  cantidad: boolean = false;
  elementofi: any;
  desactiva = true;
  anterior:boolean= true;
  elementose:any;
  //muestreo de campos 
  muestreo:boolean= false;
  tipodis:object;
  check:boolean=false;
  resultado:number;
  usuario:any;
  show:boolean=false;
  preciosd:any[]=[];
  redirecion:boolean= false;
  contador:number =0;
  vista:boolean = true;
  vigencias:any[]=[];
  comas:boolean= false;
  quitar:any;
  timepo :string ='años';
  errorcantidad:boolean=false;


  



  constructor(private ssps: SspsService,
              private fb: FormBuilder,
              private componente:ComponentesService,
              private changeDetector: ChangeDetectorRef,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private objetosService:ObjetosService) {
   /*form array formulario1*/
    this.formaForm = this.fb.group({
        checks:['',[Validators.required]],
    });

     /*form array formulario2*/
    this.formaForm2 = this.fb.group({
      checks2:['',[
        //Validators.required
      ]],
      dispositivo:['',[Validators.required]],
      cantidad:['',[Validators.required,
                    Validators.min(1),
                    Validators.max(99)
                  ]],
      anos:['',[Validators.required]]
    });

  }




  /*implementacion de modal listas */
  ngOnInit(): void {

    this.sspsl = new window.bootstrap.Modal(

      document.getElementById('ssps1')
    );
    this.sspsl.show();
    /*metodos de consultas servicios*/
    this.preguntas();
    this.gethistorial();
    this.getpoliticas();
    this.codigov();
    this.OnChanges();
    this.precios();
  }

  /* validacion de persona natutal para check pks*/
   codigov(){
    
     let {cliente}=JSON.parse(localStorage.getItem('usuario'));
     
     if(cliente == "juridica"){
      this.muestreo =true; 
    }
    
    
  }
  politica(valor:any){
  

    this.elementose =valor;
    this.vista = true;
    
    console.log(this.elementose);

    let {vigencia, ...otras } = this.elementose;
    this.vigencias = vigencia;
    
       //vaciameintos de campos de formulario seleccion de dispositivo
      if(this.resultado == undefined){
        
        console.log("datos sin info");
      
      } else{
       
      //  this.formaForm2.get('dispositivo').setValue(undefined);
        this.formaForm2.get('cantidad').setValue(undefined);
        this.formaForm2.get('anos').setValue(undefined);
        this.resultado= null;
      }
   

    /*se valida el paso al siguiente formulario*/
    if(this.formaForm.valid){
      this.desactiva = false;
    }
    
  }

  /*muestro de campos cantidad*/
  codigoveri($event,id:number){
    let {cliente}=JSON.parse(localStorage.getItem('usuario'));
    

    let isCheckeado2 = $event.target.checked;
 
    console.log(id,isCheckeado2);

    for (var i = 0; i < this.preciosd.length; i++) {
      /*cambio de estado input*/


          if(this.preciosd[i].id == id  && isCheckeado2 == true && cliente == 'juridica'){
          
            this.preciosd[i].estados =true;


          }else{
          
            this.preciosd[i].estados =false; 
          }
    
          if(this.preciosd[i].id == id  && isCheckeado2 == true && cliente == 'juridica' && this.preciosd[i].nombre == 'PKCS#10'){
            this.preciosd[i].estados =false; 
          }
    
    }

      }

      


    /*lista de precios*/
    precios(){
    
      this.ssps.precios()
      .subscribe((res:any)=>{
      this.preciosd = res;

      for (var i = 0; i < this.preciosd.length; i++) {
        this.preciosd[i].estados = false;
        if(this.preciosd[i].nombre == "token virtual"){
          this.preciosd[i].img ="../../../assets/img/token-virtual.png"
        }
        if(this.preciosd[i].nombre == "token fisico"){
          this.preciosd[i].img ="../../../assets/img/usb.png"
        }
      
        if(this.preciosd[i].nombre == "PKCS#10"){
          this.preciosd[i].img ="../../../assets/img/kpcs10.png"
        }
      
      }
      console.log(this.preciosd);
      })
    }



    OnChanges(){
    this.formaForm2.valueChanges.subscribe(valores=>{

      /*las validaciones de persona juridica*/
      this.formaForm2.get('cantidad').setValidators([Validators.required,
        Validators.min(1),
        Validators.max(99)]);
      
      let esenarios = valores.dispositivo;
      let cantidad  = valores.cantidad;
      let anos  =valores.anos;
      //console.log(this.formaForm2);
      console.log(cantidad?.value);
      
      
      /*implementacion de validaciones numeros campo numero*/
      if(this.formaForm2.get('cantidad').value >99 || this.formaForm2.get('cantidad').value === null){
        this.desactiva = true;
        this.errorcantidad =true;

}else{this.errorcantidad =false;}

      let {cliente}=JSON.parse(localStorage.getItem('usuario'));
      

      for (var i = 0; i < this.preciosd.length; i++) {
      /*cambio calculo persona juridica*/
        if(cliente == 'juridica'){

          if(this.preciosd[i].id == esenarios){
        
          let va1 = this.preciosd[i].precio *cantidad;
          this.resultado = va1 *anos;
          console.log(this.resultado);

          this.tipodis={
            idispo:this.preciosd[i].id,
            dispo:this.preciosd[i].nombre
          }
          let usuario = JSON.parse(localStorage.getItem('usuario'));
          Object.assign(usuario,  this.tipodis);
          localStorage.setItem("usuario", JSON.stringify(usuario));
     
        }
        
        if(this.preciosd[i].id == esenarios  && this.preciosd[i].nombre == 'PKCS#10' ){
          this.resultado = this.preciosd[i].precio *anos;
          //this.desactiva = false;
          this.formaForm2.get('cantidad').clearValidators();
          

          if(this.formaForm2.get('anos').value >0){
            this.formaForm2.get( 'cantidad' ).patchValue( undefined, {emitEvent: false} );
            this.desactiva = false;
         
          }
        }

      }

   /*cambio calculo persona natural*/
      if(cliente == 'natural'){
        
        if(this.preciosd[i].id == esenarios){
          console.log(this.resultado);
          this.resultado = this.preciosd[i].precio *anos;

          if(this.formaForm2.get('anos').value >0){
            this.desactiva = false;
          }

          this.tipodis={
            idispo:this.preciosd[i].id,
            dispo:this.preciosd[i].nombre,
            impuestos:this.preciosd[i].impuestos
            
          }

          let usuario = JSON.parse(localStorage.getItem('usuario'));
          Object.assign(usuario,  this.tipodis);
          localStorage.setItem("usuario", JSON.stringify(usuario));
  
       
        }
      
      
      }
      
      }
       
       /*cambio de estado de boton siguiente*/
      if(this.formaForm2.valid){this.desactiva = false;}



      if(anos  >1){

      this.timepo = 'años';
      
      } else if(anos  ==1){
        this.timepo = 'año';
      }

    });



    
    }

    /**
     *asignacion de valores vista compra 
     */ verifica(){
      if(this.resultado > 0){
        console.log(this.formaForm2.value);
        let {checks2,cantidad,anos} = this.formaForm2.value;
        let datos = {
          cantidad:cantidad,
          anos:anos,
          idpoli:this.elementose.id,
          politica:this.elementose.politica,
          costo:this.resultado
        }

        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        Object.assign(this.usuario, datos);
        localStorage.setItem("usuario", JSON.stringify( this.usuario));
        this.show = true;

        this.desactiva = false;

                
        console.log("dispo"+this.usuario?.dispo);
        /*asignacion de  objetos deacuerdo al tipo de roll*/

         if(this.usuario.dispo ==  "token fisico" && this.usuario.cliente =="natural" ){
          //asignacion de objetos para permanencia de datos al dar f5
          this.objetosService.fisicon();

      } else if(this.usuario.dispo ==  "token virtual" && this.usuario.cliente =="natural"){
        //asignacion de objetos para permanencia de datos al dar f5
        this.objetosService.virtualn();
      
      }
       else if(this.usuario.dispo ==  "token virtual" && this.usuario.cliente =="juridica"){
          //asignacion de objetos para permanencia de datos al dar f5
        this.objetosService.jvirtual();
      }

      }    

    }


    /*deshabilita botton siguiente*/
  estados() {
    this.desactiva = true;
    this.contador = this.contador + 1;
    if(this.contador >= 0){
    this.anterior = false;
    }
    console.log(this.contador);
    if(this.contador == 4){
      this.cerrarmodal();
     // 
      setTimeout(() => {
       /*ruteo deacuerdo al tipo de persona*/
       if(this.usuario.cliente == "natural" ){
        this.router.navigate(['/flujo/infobasi']);
      }else if(this.usuario.cliente == "juridica" ){
        this.router.navigate(['/flujo/dempresa']);
      }
      


      }, 100);
  
  
    }
  }

  /*valida estados del boton anterior*/
  estados2(){
    this.desactiva = true;
    this.contador = this.contador - 1;
    console.log(this.contador);
  
    if(this.contador <= 0){
      this.anterior = true;
    }

  }




    
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

/*muestra alerta minimo dispositivo*/
  dispositivo(){
    if( this.formaForm2.get('dispositivo').value == "" && this.formaForm2.invalid){
        
      this.check= true;
      console.log(this.check);
   }else{
     this.check= false;
   }
  
  }


  ngsubmit(){
  console.log(this.formaForm2);
  console.log(this.formaForm2.value);
  console.log('ejecutado');
  this.dispositivo();
  
  }

   preguntas() {
/* trae datos de consulta de json de pruebas en un metodo get*/
    this.ssps.getpreguntas()
      .subscribe((res: any) => {
        this.listadop = res;

      });

      /*implementacion de desafce de tiempo para carga de alertas*/
    setTimeout(() => {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })

    }, 500);
  }

  /*consultas preguntas historial*/

  gethistorial(){
    let buscar = localStorage.getItem('cedula');
    this.ssps.historial(buscar)
    .subscribe((res:any)=>{
      this.compras = res;
    });
  
  }

    /*consultas preguntas historial*/

    getpoliticas(){
      this.ssps.politicas()
      .subscribe((res:any)=>{

        this.directiva = res;
        console.log(res);
      });
    
    }

/*validacioned de los primeros radios*/ 
  radios($event: any) {

    let id = $event.target.value;
    let isCheckeado = $event.target.checked;

    console.log(id, isCheckeado);
    if (isCheckeado == true) {
      this.desactiva = false;
    } else if (isCheckeado == false) {
      this.desactiva = true;
    }

  }



  /* funcion para validacion de campos*/
  camposvalidos(campo: any) {
    return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
  }
  camposvalidos2(campo: any) {
    return this.formaForm2.controls[campo].errors && this.formaForm2.controls[campo].touched;
  }

  //implementacion de validacion de comas
noPuntoComa( event ) {
  
  var e = event || window.event;
  var key = e.keyCode || e.which;


  if ( key === 110 || key === 190 || key === 188 ) {     
   
    this.comas = true;
  }else{
    this.comas = false;
  }
}

/*quitar numeros ceros a la izquierda*/
quitarceros(numero){

  this.quitar = numero.replace(/^0+/, '');
  }
  

  /*implementacion de modal ssps*/
  cerrarmodal() {
    this.sspsl.hide();
    

  }

}



