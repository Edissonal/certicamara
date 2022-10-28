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
    EntregaComponent

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
