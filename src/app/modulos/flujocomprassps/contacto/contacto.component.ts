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
              Validators.minLength(4),
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

    },{validators:[this.componentesService.validalist('indicativo')]});


  }

  ngOnInit(): void {
    this.indicativo();
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
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


  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }


  /* implementa envio de datos */
  ngsubmit() {
    if (this.formaForm.invalid) {
      this.formaForm.markAllAsTouched();
      return;
    }
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

   // console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
    this.contacto.indicativo =  this.codindi?.indicativo;
  }

  /*rediociona al usuario si se equivova*/
  redireciona(){

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


  
  }


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
      cargo: 'alonso',
      celular: '3142082530',
      indicativo: 'arauca',
      telefono: '7261470',
      extenxion: '2222',
    });
  
  }

}
