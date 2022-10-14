import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  desactiva = false;
  elementose:boolean= false;
  //muestreo de campos 
  muestreo:boolean= false;
  muestreo2:boolean =false;
  muestreo3:boolean =false;
  muestreo4:boolean =false;
  check:boolean=false;

  constructor(private ssps: SspsService,
              private fb: FormBuilder,
              private componente:ComponentesService,
              private changeDetector: ChangeDetectorRef) {
   /*form array formulario1*/
    this.formaForm = this.fb.group({
      checks: new FormArray([], [this.componente.validar(1), this.componente.minSelectedCheckboxes(1)])
    });

    this.formaForm2 = this.fb.group({
      checks2: new FormArray([], [this.componente.validar(1), this.componente.minSelectedCheckboxes(1)]),
      dispositivo:['',[Validators.required]],
    });

  }


/*llamdos deFormArray para validacion en servicio*/
  get checksFormArray() {
    return this.formaForm.get('checks') as FormArray;
  }

  get checksFormArray2() {
    return this.formaForm2.get('checks2') as FormArray;
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
  }

  /* validacion de persona natutal para check pks*/
   codigov(){
    
     let {cliente}=JSON.parse(localStorage.getItem('usuario'));
     
     if(cliente == "juridica"){
      this.muestreo =true; 
    }
    

    
  }

  codigoveri($event){
    let {cliente}=JSON.parse(localStorage.getItem('usuario'))
    

    let isCheckeado2 = $event.target.checked;
    let id = $event.target.value;
    console.log("check"+id,isCheckeado2,cliente);

  
    if(id == 1 && isCheckeado2 == true){
    
      this.muestreo2 =true; 
    }else{
      this.muestreo2 =false; 
    }
      if(id ==2 && isCheckeado2 == true){
    
        this.muestreo3 =true; 
      }else{
        this.muestreo3 =false; 
      }
        if( id ==3 && isCheckeado2 == true){
    
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




  


    
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngsubmit(){
  console.log(this.formaForm2);
  console.log('ejecutado');

  if( this.formaForm2.get('dispositivo').value == "" && this.formaForm2.invalid){
        
    this.check= true;
    console.log(this.check);
 }else{
   this.check= false;
 }
  }

   preguntas() {
/* trae datos de consulta de json de pruebas en un metodo get*/
    this.ssps.getpreguntas()
      .subscribe((res: any) => {
        this.listadop = res;

      });

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
        this.adicionarcheboxcontrol();
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



  /*crear nuevo form array*/
  adicionarcheboxcontrol() {
    this.directiva.forEach(() => this.checksFormArray.push(new FormControl(false)));
    this.directiva.forEach(() => this.checksFormArray2.push(new FormControl(false)));
  }
  /*eventos y propiedades formulario1*/
  eventoschecks(event: any, formField: any, key: any) {

    //console.log(event, formField, formField.value, key);

    this.elementofi = this.formaForm.value.checks
      //extraer id selecionado
      .map((valor: any, i: any) => valor ? this.directiva[i].id : null)
      //quitar valorres nulos del array
      .filter((v: any) => v !== null);
    console.log(this.elementofi);

    if (this.formaForm.invalid) {3
      this.formaForm.markAllAsTouched();
      this.desactiva = true;
      console.log(this.formaForm);
      return;
    }else if(this.formaForm.valid){
      this.desactiva = false;
      this.elementose =this.formaForm.value.checks;

    }

    
  
  }
  
  //formulario2 validacion de eventos
  eventoschecks2(event: any, formField: any, key: any) {

   // console.log(event, formField, formField.value, key);
   // let elementofi = this.formaForm2.value.checks2;
    console.log(this.formaForm2);
  
  }







}



