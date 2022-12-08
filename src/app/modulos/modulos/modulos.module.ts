import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SslComponent } from '../../modulos/ssl/ssl.component';
import { SspsComponent } from '../../modulos/ssps/ssps.component';
import { HomeComponent } from '../home/home.component';
import { CertimailHomeComponent } from '../certimail/certimail-home/certimail-home.component';
import { ValidacionesComponent } from '../validaciones/validaciones.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlanescertiComponent } from '../planescerti/planescerti.component';
import { AppRoutingModule } from 'src/app/rutas/app-routing.module';
import { PersonaNComponent } from '../validaciones/persona-n/persona-n.component';
import { PersonaJComponent } from '../validaciones/persona-j/persona-j.component';
import { IngresocertimailComponent } from '../ingresocertimail/ingresocertimail.component';
import { ContactenosComponent } from '../contactenos/contactenos.component';
import { FlujocomprasspsComponent } from '../flujocomprassps/flujocomprassps.component';
import { BarraComponent } from '../barra/barra.component';
import { InfoBasicaComponent } from '../flujocomprassps/info-basica/info-basica.component';
import { PagoComponent } from '../flujocomprassps/pago/pago.component';
import { NocopiadoDirective } from 'src/app/directivas/nocopiado.directive';
import { ContactoComponent } from '../flujocomprassps/contacto/contacto.component';
import { EntregaComponent } from '../flujocomprassps/entrega/entrega.component';
import { DatosEntregaNComponent } from '../flujocomprassps/datos-entrega-n/datos-entrega-n.component';
import { DatosFacturacionComponent } from '../flujocomprassps/datos-facturacion/datos-facturacion.component';
<<<<<<< HEAD
import { InstalacionesComponent } from '../flujocomprassps/instalaciones/instalaciones.component';
import { PaceToPlayComponent } from '../flujocomprassps/pace-to-play/pace-to-play.component';
import { DatosempresaComponent } from '../flujocomprassps/datosempresa/datosempresa.component';
import { SolicitantesComponent } from '../flujocomprassps/solicitantes/solicitantes.component';
=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f






@NgModule({
  declarations: [
    SslComponent,
    CertimailHomeComponent,
    SspsComponent,
    HomeComponent,
    ValidacionesComponent,
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
<<<<<<< HEAD
    DatosFacturacionComponent,
    PaceToPlayComponent,
    InstalacionesComponent,
    DatosempresaComponent,
    SolicitantesComponent
=======
    DatosFacturacionComponent
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f

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
