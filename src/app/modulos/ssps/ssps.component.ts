import { ChangeDetectorRef, Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup, ValidatorFn, AbstractControl, FormArray, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { SspsService } from '../../servicios/ssps.service';
import { ComponentesService } from '../../servicios/componentes.service';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { ObjetosService } from '../../servicios/objetos.service';
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
declare var window: any;
declare var bootstrap: any;

@Component({
  selector: 'app-ssps',
  templateUrl: './ssps.component.html',
  styleUrls: ['./ssps.component.css']
})
export class SspsComponent implements OnInit {

<<<<<<< HEAD

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
<<<<<<< HEAD
  resultado:number;
=======
  resultado:any;
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  usuario:any;
  show:boolean=false;
  preciosd:any[]=[];
  redirecion:boolean= false;
  contador:number =0;
  vista:boolean = true;
<<<<<<< HEAD
  vigencias:any[]=[];
  comas:boolean= false;
  quitar:any;
  timepo :string ='años';
  errorcantidad:boolean=false;

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

  



  constructor(private ssps: SspsService,
              private fb: FormBuilder,
              private componente:ComponentesService,
              private changeDetector: ChangeDetectorRef,
              private router: Router,
<<<<<<< HEAD
              private activateRoute: ActivatedRoute,
              private objetosService:ObjetosService) {
=======
              private activateRoute: ActivatedRoute) {
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
   /*form array formulario1*/
    this.formaForm = this.fb.group({
        checks:['',[Validators.required]],
    });

<<<<<<< HEAD
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
=======
    this.formaForm2 = this.fb.group({
      checks2:['',[Validators.required]],
      dispositivo:['',[Validators.required]],
      cantidad:[],
      anos:[]
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
<<<<<<< HEAD

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
    
=======
    this.desactiva = false;

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
    
<<<<<<< HEAD
          if(this.preciosd[i].id == id  && isCheckeado2 == true && cliente == 'juridica' && this.preciosd[i].nombre == 'PKCS#10'){
=======
          if(this.preciosd[i].id == id  && isCheckeado2 == true && cliente == 'juridica' && this.preciosd[i].nombre == 'PCKS#10'){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
            this.preciosd[i].estados =false; 
          }
    
    }

      }

<<<<<<< HEAD
      
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f


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
      
<<<<<<< HEAD
        if(this.preciosd[i].nombre == "PKCS#10"){
=======
        if(this.preciosd[i].nombre == "PCKS#10"){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
          this.preciosd[i].img ="../../../assets/img/kpcs10.png"
        }
      
      }
      console.log(this.preciosd);
      })
    }



    OnChanges(){
    this.formaForm2.valueChanges.subscribe(valores=>{

      /*las validaciones de persona juridica*/
<<<<<<< HEAD
      this.formaForm2.get('cantidad').setValidators([Validators.required,
        Validators.min(1),
        Validators.max(99)]);
=======

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      
      let esenarios = valores.dispositivo;
      let cantidad  = valores.cantidad;
      let anos  =valores.anos;
<<<<<<< HEAD
      //console.log(this.formaForm2);
      console.log(cantidad?.value);
      
      
      /*implementacion de validaciones numeros campo numero*/
      if(this.formaForm2.get('cantidad').value >99 || this.formaForm2.get('cantidad').value === null){
        this.desactiva = true;
        this.errorcantidad =true;

}else{this.errorcantidad =false;}
=======

      console.log(esenarios);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

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
        
<<<<<<< HEAD
        if(this.preciosd[i].id == esenarios  && this.preciosd[i].nombre == 'PKCS#10' ){
          this.resultado = this.preciosd[i].precio *anos;
          //this.desactiva = false;
          this.formaForm2.get('cantidad').clearValidators();
          

          if(this.formaForm2.get('anos').value >0){
            this.formaForm2.get( 'cantidad' ).patchValue( undefined, {emitEvent: false} );
            this.desactiva = false;
         
          }
=======
        if(this.preciosd[i].id == esenarios  && this.preciosd[i].nombre == 'PCKS#10' ){
          this.resultado = this.preciosd[i].precio *anos;
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
        }

      }

   /*cambio calculo persona natural*/
      if(cliente == 'natural'){
<<<<<<< HEAD
        
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
            
=======
        if(this.preciosd[i].id == esenarios){
          console.log(this.resultado);
          this.resultado = this.preciosd[i].precio *anos;
          this.tipodis={
            idispo:this.preciosd[i].id,
            dispo:this.preciosd[i].nombre
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
          }

          let usuario = JSON.parse(localStorage.getItem('usuario'));
          Object.assign(usuario,  this.tipodis);
          localStorage.setItem("usuario", JSON.stringify(usuario));
<<<<<<< HEAD
  
=======
     
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
       
        }
      
      
      }
      
      }
       
       /*cambio de estado de boton siguiente*/
<<<<<<< HEAD
      if(this.formaForm2.valid){this.desactiva = false;}



      if(anos  >1){

      this.timepo = 'años';
      
      } else if(anos  ==1){
        this.timepo = 'año';
      }

    });



=======
      if(this.resultado > 0){this.desactiva = false;}




    });
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
    
    }

    /**
     *asignacion de valores vista compra 
     */ verifica(){
<<<<<<< HEAD
      if(this.resultado > 0){
=======
      if(this.formaForm2.valid){
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
<<<<<<< HEAD

                
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

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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
<<<<<<< HEAD
       /*ruteo deacuerdo al tipo de persona*/
       if(this.usuario.cliente == "natural" ){
        this.router.navigate(['/flujo/infobasi']);
      }else if(this.usuario.cliente == "juridica" ){
        this.router.navigate(['/flujo/dempresa']);
      }
      


=======
        this.router.navigate(['/flujo']);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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

<<<<<<< HEAD
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
  
=======

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

  /*implementacion de modal ssps*/
  cerrarmodal() {
    this.sspsl.hide();
    

  }

<<<<<<< HEAD
=======







>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
}



