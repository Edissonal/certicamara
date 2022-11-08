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

     /*funcion que hace el filtro de los elementos selecionados del select*/
  verficacion(event) {

    console.log(event.target.value);
    this.codindi = this.indicativos.find(x => x?.nomDepartamento === event.target.value);
    console.log('prueba');
    console.log(this.codindi?.indicativo)
    console.log(this.codigo);
  }


/*funcion para el envio de datos*/
  ngsubmit() {

    if (this.formaForm.invalid) {
      this.formaForm.markAllAsTouched();
      return;
    }

    this.router.navigate(['/flujo/facturacion'])
    this.componentesService.emitircambio("facturacionn");

}




  /*rediociona al usuario si se equivova*/
  redireciona(){
    this.componentesService.emitircambio("revecontacto");
    // this.componentesService.emitircambio("mostrarordencambio");
     this.router.navigate(['/flujo/contacto'])
  }
  
}
