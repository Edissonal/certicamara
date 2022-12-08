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
<<<<<<< HEAD
  indicativos:any;
  contacto:any;
  codindi: any;
  usuario:any;
  comas:boolean;



  

  constructor(private fb: FormBuilder,
              private router: Router,
              private componentesService: ComponentesService,
              private ssps: SspsService,
              private changeDetector: ChangeDetectorRef) {
=======
  indicativos: any[];
  codindi: any;
  codigo:any;
  usuario:any;
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private componentesService: ComponentesService,
    private ssps: SspsService,
    private changeDetector: ChangeDetectorRef) {
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

    /*validacion de campos validators*/
    this.formaForm = this.fb.group({
    nombres:['',[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.pattern("[a-zA-Z ]{2,254}")
      ]
      ],
     apellidos:['',[Validators.required,
            Validators.minLength(3),
            Validators.maxLength(60),
            Validators.pattern("[a-zA-Z ]{2,254}")]],
    cargo:['',[Validators.required,
<<<<<<< HEAD
              Validators.minLength(4),
=======
              Validators.minLength(3),
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
              Validators.maxLength(60),
              Validators.pattern("[a-zA-Z ]{2,254}")]],
      correo: ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(60),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular: ['',[Validators.required,
      Validators.min(999999999),
      Validators.max(9999999999)
      ]],
<<<<<<< HEAD
      indicativo: [],
      telefono: ['', [Validators.required,
        Validators.min(999999999),
        Validators.max(9999999999)
      ]],
      extenxion: [0, [
          Validators.required,
          Validators.min(99999),
          Validators.max(999999)
=======
      indicativo: [Validators.required],
      telefono: ['', [Validators.required,
        Validators.min(999999),
        Validators.max(9999999999),
      ]],
      extenxion: ['', [Validators.required,
      Validators.min(999),
      Validators.max(9999)
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      ]],

    },{validators:[this.componentesService.validalist('indicativo')]});


  }

  ngOnInit(): void {
    this.indicativo();
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
<<<<<<< HEAD
    this.contacto = JSON.parse(localStorage.getItem('contacto'));
    let cedula =  JSON.parse(localStorage.getItem('cedula'));

/*validaciones de entrega de de tados crm*/
    this.ssps.crmcontacto(cedula)
    .subscribe((res:any)=>{
    // console.log(this.contacto);
      let [datos,otros] = res; 
    //  console.log(res); 

    if(!Array.isArray(res)||res.length === 0){return;}
    else if(res.length > 0){
   
      const nulo = Object.values(this.contacto).every(x => x === null || x === '');

      if(nulo == true){
              Object.assign(this.contacto, datos);
              localStorage.setItem("contacto", JSON.stringify(this.contacto));
                 
                }

    }

  

    
    
    });

=======
    this.cargarDataAlFormulario();
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }


  /* implementa envio de datos */
  ngsubmit() {
<<<<<<< HEAD
=======

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

>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
    if (this.formaForm.invalid) {
      this.formaForm.markAllAsTouched();
      return;
    }
<<<<<<< HEAD
   // console.log(this.formaForm);
  const valoresfi = this.formaForm.value;

    localStorage.setItem("contacto", JSON.stringify(valoresfi));

  

    if(this.usuario.dispo == "token virtual"  && this.usuario.cliente == "natural"){
      this.componentesService.emitircambio("contactof");
    //  console.log(this.usuario.dispo);
      this.router.navigate(['/flujo/entregan']);
    }else if(this.usuario.dispo == "token fisico"  && this.usuario.cliente == "natural"){
      this.componentesService.emitircambio("contactof");
      this.router.navigate(['/flujo/entrega']);
    } 

    else if(this.usuario.dispo == "token fisico"  && this.usuario.cliente == "juridica"){
      this.componentesService.emitircambio("contactof");
      this.router.navigate(['/flujo/solicitantes']);
    } 

    else if(this.usuario.dispo == "token virtual"  && this.usuario.cliente == "juridica"){
      this.componentesService.emitircambio("contactof");
      this.router.navigate(['/flujo/solicitantes']);
    } 
    
=======


    this.componentesService.emitircambio("contactof");
   // this.componentesService.emitircambio("mostrarordencambio");
    this.router.navigate(['/flujo/entregan'])
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
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

<<<<<<< HEAD
   // console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
    this.contacto.indicativo =  this.codindi?.indicativo;
=======
    console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
    console.log('prueba');
    console.log(this.codindi?.indicativo)
    console.log(this.codigo);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

  /*rediociona al usuario si se equivova*/
  redireciona(){
<<<<<<< HEAD

    //console.log('anterior')
    if(this.usuario.dispo == "token virtual" && this.usuario.cliente == "natural"){
    this.router.navigate(['/flujo/infobasi']);
    this.componentesService.emitircambio("reveinfobasi");

  }else if(this.usuario.dispo == "token fisico" && this.usuario.cliente == "natural"){
    this.componentesService.emitircambio("reveinfobasi");
    this.router.navigate(['/flujo/infobasi']);
  
  }
  
  /*redireciona deacuerdo al tipo de roll*/
  else if(this.usuario.dispo == "token virtual" && this.usuario.cliente == "juridica"){
    this.componentesService.emitircambio("reveinfobasi");
    this.router.navigate(['/flujo/dempresa']);
  
  }

  else if(this.usuario.dispo == "token fisico" && this.usuario.cliente == "juridica"){
    this.componentesService.emitircambio("reveinfobasi");
    this.router.navigate(['/flujo/dempresa']);
  
  }


=======
    if(this.usuario.dispo == "token virtual"){
    this.router.navigate(['/flujo/infobasi']);
    this.componentesService.emitircambio("reveinfobasi");

  }else if(this.usuario.dispo == "token fisico"){

    this.router.navigate(['/flujo/entrega']);
  
  }
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  
  }


<<<<<<< HEAD
  /*validacion de decimales input*/
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

  this.contacto.celular = numero.replace(/^0+/, '');

  }

  quitarceros2(numero){

    this.contacto.telefono = numero.replace(/^0+/, '');
  
    }
  
  quitarceros3(numero){

      this.contacto.extenxion = numero.replace(/^0+/, '');
    
      }
  

  cargarDataAlFormulario() {



    // this.forma.setValue({
    this.formaForm.setValue({
      correo: this.usuario.correo,
      nombres: this.usuario.nombres,
      apellidos: this.usuario.apellidos,
=======
  cargarDataAlFormulario() {

    // this.forma.setValue({
    this.formaForm.setValue({
      correo: 'edissonalonso@gmail.com',
      nombres: 'edisson andres',
      apellidos: 'alonso',
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
      cargo: 'alonso',
      celular: '3142082530',
      indicativo: 'arauca',
      telefono: '7261470',
      extenxion: '2222',
    });
  
  }

}
