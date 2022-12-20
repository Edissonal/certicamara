import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/rutas/app-routing.module';

/**/ 
import { SslComponent } from '../ssl/ssl.component';
import { CertimailHomeComponent } from '../certimail/certimail-home/certimail-home.component';
import { SspsComponent } from '../ssps/ssps.component';
import { HomeComponent } from '../home/home.component';

import { PlanescertiComponent } from '../planescerti/planescerti.component';
import { PersonaNComponent } from '../validaciones/persona-n/persona-n.component';
import { PersonaJComponent } from '../validaciones/persona-j/persona-j.component';
import { IngresocertimailComponent } from '../ingresocertimail/ingresocertimail.component';
import { ContactenosComponent } from '../contactenos/contactenos.component';
import { FlujocomprasspsComponent } from '../flujocomprassps/flujocomprassps.component';
import { BarraComponent } from '../barra/barra.component';
import { InfoBasicaComponent } from '../flujocomprassps/info-basica/info-basica.component';
import { PagoComponent } from '../flujocomprassps/pago/pago.component';

import { EntregaComponent } from '../flujocomprassps/entrega/entrega.component';
import { DatosEntregaNComponent } from '../flujocomprassps/datos-entrega-n/datos-entrega-n.component';
import { DatosFacturacionComponent } from '../flujocomprassps/datos-facturacion/datos-facturacion.component';
import { PaceToPlayComponent } from '../flujocomprassps/pace-to-play/pace-to-play.component';
import { InstalacionesComponent } from '../flujocomprassps/instalaciones/instalaciones.component';
import { DatosempresaComponent } from '../flujocomprassps/datosempresa/datosempresa.component';
import { SolicitantesComponent } from '../flujocomprassps/solicitantes/solicitantes.component';
import { ValidacionesComponent } from '../validaciones/validaciones.component';
import { ContactoComponent } from '../flujocomprassps/contacto/contacto.component';
import { NocopiadoDirective } from '../../directivas/nocopiado.directive';





@NgModule({
  declarations:[
    SslComponent,
    ValidacionesComponent,
    CertimailHomeComponent,
    SspsComponent,
    HomeComponent,
    PlanescertiComponent,
    PersonaNComponent,
    PersonaJComponent,
    IngresocertimailComponent,
    ContactenosComponent,
    FlujocomprasspsComponent,
    BarraComponent,
    InfoBasicaComponent,
    PagoComponent,
    ContactoComponent,
    NocopiadoDirective,
    EntregaComponent,
    DatosEntregaNComponent,
    DatosFacturacionComponent,
    PaceToPlayComponent,
    InstalacionesComponent,
    DatosempresaComponent,
    SolicitantesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    AppRoutingModule
  ],exports:[
    ReactiveFormsModule,
    FormsModule,
    ValidacionesComponent,
    
  ]
})
export class ModulosModule { }
