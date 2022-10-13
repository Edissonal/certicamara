import { Component, OnInit } from '@angular/core';
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
  cantidad: boolean = false;
  elementofi: any;
  desactiva = true;

  constructor(private ssps: SspsService,
              private fb: FormBuilder,
              private componente:ComponentesService) {

    this.formaForm = this.fb.group({
      checks: new FormArray([], [this.componente.validar(1), this.componente.minSelectedCheckboxes(1)])
    });
  }

/*llamdos deFormArray para validacion en servicio*/
  get checksFormArray() {
    return this.formaForm.get('checks') as FormArray;
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

  }


   preguntas() {
/* trae datos de consulta de json de pruebas en un metodo get*/
    this.ssps.getpreguntas()
      .subscribe((res: any) => {
        this.listadop = res;
      /*  this.directiva = res.politicas;
        this.compras = res.historial;
        console.log(this.compras);
        this.adicionarcheboxcontrol();*/
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


  /*implementacion de modal ssps*/
  cerrarmodal() {
    this.sspsl.hide();

  }



  /*crear nuevo form array*/
  adicionarcheboxcontrol() {
    this.directiva.forEach(() => this.checksFormArray.push(new FormControl(false)));
  }
  /*eventos y propiedades*/
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
      console.log(this.formaForm);
      localStorage.setItem('id-poli',this.elementofi)
    }
  
  }








}



