import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, ValidatorFn, AbstractControl, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { SspsService } from '../../servicios/ssps.service';
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
  formaForm: FormGroup;
  arrayOfRecepients:any = [];
  constructor(private ssps: SspsService,
              private fb:FormBuilder) { 
  
                this.formaForm = this.fb.group({
                  recipients: new FormArray([], this.minSelectedCheckboxes(1))
                });
              }


              get recipientsFormArray() {
                return this.formaForm.get('recipients') as FormArray;
              }

  /*implementacion de modal listas */
  ngOnInit(): void {

    this.sspsl = new window.bootstrap.Modal(

      document.getElementById('ssps1')
    );
    this.sspsl.show();
    this.preguntas();


  }


  async preguntas() {

    this.ssps.getsede()
      .subscribe((res: any) => {

        this.listadop = res.preguntas;
        this.directiva = res.politicas;
        console.log(this.directiva);
        this.adicionarcheboxcontrol();
      });

    setTimeout(() => {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })

    }, 500);
  }

  private adicionarcheboxcontrol() {
    this.directiva.forEach(() => this.recipientsFormArray.push(new FormControl(false)));
  }

  onCheckBoxTick(event:any, formField:any, key:any) {

    console.log(event, formField, formField.value, key);
    
  }


  /*implementacion de modal ssps*/
  cerrarmodal() {
    this.sspsl.hide();

  }

  /*validar los checks*/

  onSubmit(){
  }

   minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: AbstractControl) => {
      if (formArray instanceof FormArray) {
        const totalSelected = formArray.controls
          .map((control) => control.value)
          .reduce((prev, next) => (next ? prev + next : prev), 0);
        return totalSelected >= min ? null : { required: true };
      }
  
      throw new Error('formArray is not an instance of FormArray');
    };
  
    return validator;
  }
}



