import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentesService } from '../../../servicios/componentes.service';
import { SspsService } from '../../../servicios/ssps.service';

@Component({
  selector: 'app-datos-entrega-n',
  templateUrl: './datos-entrega-n.component.html',
  styleUrls: ['./datos-entrega-n.component.css']
})
export class DatosEntregaNComponent implements OnInit {

  formaForm!: FormGroup;
  indicativos: any[];
  codindi: any;
  codigo:any;
<<<<<<< HEAD
  usuario:any;
  comas:boolean =false;
  comas2:boolean =false;
  comas3:boolean =false;
  entrega:any;
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

  constructor(private fb: FormBuilder,
              private router: Router,
              private componentesService: ComponentesService,
              private ssps: SspsService,
              private changeDetector: ChangeDetectorRef) {
              
                this.formaForm = this.fb.group({

                  correo: ['', [Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(60),
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
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
                    ]],
              
                  },{validators:[this.componentesService.validalist('indicativo')]});
=======
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
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f


              }

  ngOnInit(): void {
    this.indicativo();
<<<<<<< HEAD
 //   this.cargarDataAlFormulario();
     this.entrega = JSON.parse(localStorage.getItem('entrega'));
     let cedula =  JSON.parse(localStorage.getItem('cedula'));

/*validaciones de entrega de de tados crm*/
     this.ssps.crentrega(cedula)
     .subscribe((res:any)=>{

       let [datos,otros] = res; 
       console.log(res); 
 
     if(!Array.isArray(res)||res.length === 0){return;}
     else if(res.length > 0){
    
       const nulo = Object.values(  this.entrega).every(x => x === null || x === '');
 
       if(nulo == true){
               Object.assign(  this.entrega, datos);
               localStorage.setItem("entrega", JSON.stringify(  this.entrega));
                  
                 }
 
     }
 
   
 
     
     
     });
 

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }

/*rediociona al usuario si se equivova*/
  ngAfterContentChecked(): void {
  this.changeDetector.detectChanges();
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

<<<<<<< HEAD
  /*funcion que hace el filtro de los elementos selecionados del select*/
=======
     /*funcion que hace el filtro de los elementos selecionados del select*/
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  verficacion(event) {

    console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
<<<<<<< HEAD
    this.entrega.indicativo =  this.codindi?.indicativo;
=======
    console.log('prueba');
    console.log(this.codindi?.indicativo)
    console.log(this.codigo);
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  }


/*funcion para el envio de datos*/
  ngsubmit() {

    if (this.formaForm.invalid) {
      this.formaForm.markAllAsTouched();
      return;
    }
<<<<<<< HEAD
    
    const valoresfi = this.formaForm.value;

    localStorage.setItem("entrega", JSON.stringify(valoresfi));
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

    this.router.navigate(['/flujo/facturacion'])
    this.componentesService.emitircambio("facturacionn");

}




  /*rediociona al usuario si se equivova*/
  redireciona(){
    this.componentesService.emitircambio("revecontacto");
    // this.componentesService.emitircambio("mostrarordencambio");
     this.router.navigate(['/flujo/contacto'])
  }
<<<<<<< HEAD

  
  cargarDataAlFormulario() {

    // this.forma.setValue({
    this.formaForm.setValue({
      correo: 'edissonalonso@gmail.com',
      indicativo: '22',
      telefono: '3142082530',
      extenxion: '2222',

    });
  
  }

  /*validacion de decimales input*/

    noPuntoComa( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comas = res;
      
      })
      
   
    }

    
    noPuntoComa2( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comas2 = res;
      
      })
      
    }


    noPuntoComa3( event ) {
  
      this.componentesService.commas(event)
      .subscribe((res: any) => {
      
       this.comas3 = res;
      
      })
      
    }

/*quitar ceros*/

quitarceros2(numero){

  this.entrega.indicativo = numero.replace(/^0+/, '');

  }
quitarceros3(numero){

    this.entrega.telefono = numero.replace(/^0+/, '');
  
    }
quitarceros4(numero){

      this.entrega.extenxion= numero.replace(/^0+/, '');
    
      }
  


=======
  
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
}
