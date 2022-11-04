import { core } from '@angular/compiler';
import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
import { SspsService } from '../../../servicios/ssps.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Output() onMantenimiento: EventEmitter<boolean> = new EventEmitter();
  formaForm!: FormGroup;
  indicativos: any[];
  codindi: any;
  codigo:any;
  usuario:any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private componentesService: ComponentesService,
    private ssps: SspsService,
    private changeDetector: ChangeDetectorRef) {

    /*validacion de campos validators*/
    this.formaForm = this.fb.group({

      correo: ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(60),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular: ['',[Validators.required,
      Validators.min(999999999),
      Validators.max(9999999999)
      ]],
      indicativo: [Validators.required],
      telefono: ['', [Validators.required,
        Validators.min(999999),
        Validators.max(9999999999),
      ]],
      extenxion: ['', [Validators.required,
      Validators.min(999),
      Validators.max(9999)
      ]],

    },{validators:[this.componentesService.validalist('indicativo')]});


  }

  ngOnInit(): void {
    this.indicativo();
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.cargarDataAlFormulario();

  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }


  /* implementa envio de datos */
  ngsubmit() {

    let {correo, celular, extenxion,telefono} = this.formaForm.value;
    
    const valoresfi ={
        "correo":correo,
        "celular":celular,
        "extension":extenxion,
        "telefono":telefono,
        "codindicativo":this.codindi?.indicativo,
        "indicativo":this.codigo 
    }

    console.log(valoresfi);

    if (this.formaForm.invalid) {
      this.formaForm.markAllAsTouched();
      return;
    }


    this.componentesService.emitircambio("contactof");
    this.componentesService.emitircambio("mostrarordencambio");
    this.router.navigate(['/flujo/pago'])
  }

/* funcion para los errores indicados*/
  camposvalidos(campo: any) {
    return this.formaForm.controls[campo].errors && this.formaForm.controls[campo].touched;
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

    console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
    console.log('prueba');
    console.log(this.codindi?.indicativo)
    console.log(this.codigo);
  }

  /*rediociona al usuario si se equivova*/
  redireciona(){
    if(this.usuario.dispo == "token virtual"){
    this.router.navigate(['/flujo/infobasi']);
    this.componentesService.emitircambio("infobasic");

  }else if(this.usuario.dispo == "token fisico"){

    this.router.navigate(['/flujo/entrega']);
  
  }
  
  }


  cargarDataAlFormulario() {

    // this.forma.setValue({
    this.formaForm.setValue({
      correo: 'edissonalonso@gmail.com',
      celular: '3142082530',
      indicativo: 'arauca',
       telefono: '7261470',
       extenxion: '2222',
    });
  
  }

}
