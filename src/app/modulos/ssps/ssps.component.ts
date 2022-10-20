import { ChangeDetectorRef, Component, OnInit, OnChanges } from '@angular/core';
import { NgForm, FormGroup, ValidatorFn, AbstractControl, FormArray, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { SspsService } from '../../servicios/ssps.service';
import { ComponentesService } from '../../servicios/componentes.service';
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
  elementose:number;
  //muestreo de campos 
  muestreo:boolean= false;
  muestreo2:boolean =false;
  muestreo3:boolean =false;
  muestreo4:boolean =false;
  check:boolean=false;
  resultado:any;
  dispositivos:any=[
    {id: 1, dispo:"token fisico"},
    {id: 2, dispo:"token virtual"},
    {id: 3, dispo:"PCKS#10(persona juridica)"},

  ];
  valoresfi:any;
  show:boolean=false;

  constructor(private ssps: SspsService,
              private fb: FormBuilder,
              private componente:ComponentesService,
              private changeDetector: ChangeDetectorRef) {
   /*form array formulario1*/
    this.formaForm = this.fb.group({
        checks:['',[Validators.required]],
    });

    this.formaForm2 = this.fb.group({
      checks2:['',[Validators.required]],
      dispositivo:['',[Validators.required]],
      cantidad:[],
      anos:[]
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
    
    console.log("model "+this.elementose);
    this.desactiva = false;

  }

  /*muestro de campos cantidad*/
  codigoveri($event){
    let {cliente}=JSON.parse(localStorage.getItem('usuario'));
    

    let isCheckeado2 = $event.target.checked;
    let id = $event.target.value;
    console.log("check"+id,isCheckeado2,cliente);

    if(id == 1 && isCheckeado2 == true && cliente == 'juridica'){
    
      this.muestreo2 =true; 
    }else{
      this.muestreo2 =false; 
    }
      if(id ==2 && isCheckeado2 == true && cliente == 'juridica'){
    
        this.muestreo3 =true; 
      }else{
        this.muestreo3 =false; 
      }
        if( id ==3 && isCheckeado2 == true && cliente == 'juridica'){
    
          this.muestreo4 =true; 
        }else{
          this.muestreo4 =false; 
        }
        if( isCheckeado2 == false && this.formaForm2.invalid){
        
          this.check= true;
          console.log(this.check);
       }else{
         this.check= false;
       }
      
    }


    OnChanges(){
    this.formaForm2.valueChanges.subscribe(valores=>{

      /*las validaciones de persona juridica*/

      
      let esenarios = valores.dispositivo;
      let cantidad  = valores.cantidad;
      let anos  =valores.anos;
      let costo1 =125000;
      let costo2 =130000;
      let costo3 =127000;

      console.log(esenarios);
      console.log(cantidad);
      console.log(anos);

      let {cliente}=JSON.parse(localStorage.getItem('usuario'));
      if(cliente == 'juridica'){

    

         if(esenarios == 1){
      
         let va1 = costo1 * cantidad;
         console.log('cantidad' + va1);

         this.resultado = va1 *anos;
         console.log(this.resultado);
         this.desactiva = false;
      }

      if(esenarios == 2){
      
        let va1 = costo2 * cantidad;
        console.log('cantidad' + va1);

        this.resultado = va1 *anos;
        console.log(this.resultado);
        this.desactiva = false;
     }

     if(esenarios == 3){
      
      let va1 = costo3 * cantidad;
      console.log('cantidad' + va1);

      this.resultado = va1 *anos;
      console.log(this.resultado)
      this.desactiva = false;
   }

    }

   /*las validaciones de persona natural*/
    if(cliente == 'natural'){

      if(esenarios == 1){

        this.resultado = costo1 * anos;
        this.desactiva = false;
      

     }

     if(esenarios == 2){

      this.resultado = costo2* anos;
      this.desactiva = false;
   }

   if(esenarios == 3){

    this.resultado = costo3 * anos;
    this.desactiva = false;
 }
    
    }
    


    });
    
    }

    /**
     *asignacion de valores vista compra 
     */ verifica(){
      if(this.formaForm2.valid){
        console.log(this.formaForm2.value);
        let {checks2,cantidad,anos} = this.formaForm2.value;
     
        //let valoresfi = Object.assign(compra, compra2);
       // localStorage.setItem("compra", JSON.stringify(valoresfi));
         let {id,dispo} = this.dispositivos.find(x => x.id == checks2);
         this.ssps.politica(checks2)
         .subscribe((res:any)=>{
         let [datos,...data] = res;
             let poli = datos.politica;

              this.valoresfi = {
                cantidad:cantidad,
                anos:anos,
                dispositivo:dispo,
                politica:poli,
                costo:this.resultado
              }
              localStorage.setItem("precompra", JSON.stringify(this.valoresfi));
             this.show = true;
        });


      
         

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

  estados() {
    this.desactiva = true;
  }


  /* funcion para validacion de campos*/
  camposvalidos(campo: any) {
    return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
  }
  camposvalidos2(campo: any) {
    return this.formaForm2.controls[campo].errors && this.formaForm2.controls[campo].touched;
  }



  /*implementacion de modal ssps*/
  cerrarmodal() {
    this.sspsl.hide();

  }







}



