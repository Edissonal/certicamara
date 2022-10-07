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
    IngresocertimailComponent 

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    AppRoutingModule
  ],exports:[
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class ModulosModule { }
