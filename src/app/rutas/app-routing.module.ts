import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertimailHomeComponent } from '../modulos/certimail/certimail-home/certimail-home.component';
import { HomeComponent } from '../modulos/home/home.component';
import { SspsComponent } from '../modulos/ssps/ssps.component';
import { PlanescertiComponent } from '../modulos/planescerti/planescerti.component';
import { ValidacionesComponent } from '../modulos/validaciones/validaciones.component';
import { PersonaNComponent } from '../modulos/validaciones/persona-n/persona-n.component';
import { PersonaJComponent } from '../modulos/validaciones/persona-j/persona-j.component';
import { IngresocertimailComponent } from '../modulos/ingresocertimail/ingresocertimail.component';
import { ContactenosComponent } from '../modulos/contactenos/contactenos.component';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { FlujocomprasspsComponent } from '../modulos/flujocomprassps/flujocomprassps.component';
import { InfoBasicaComponent } from '../modulos/flujocomprassps/info-basica/info-basica.component';
import { PagoComponent } from '../modulos/flujocomprassps/pago/pago.component';
import { ContactoComponent } from '../modulos/flujocomprassps/contacto/contacto.component';
import { EntregaComponent } from '../modulos/flujocomprassps/entrega/entrega.component';
import { DatosEntregaNComponent } from '../modulos/flujocomprassps/datos-entrega-n/datos-entrega-n.component';
import { DatosFacturacionComponent } from '../modulos/flujocomprassps/datos-facturacion/datos-facturacion.component';
import { InstalacionesComponent } from '../modulos/flujocomprassps/instalaciones/instalaciones.component';
import { PaceToPlayComponent } from '../modulos/flujocomprassps/pace-to-play/pace-to-play.component';
import { DatosempresaComponent } from '../modulos/flujocomprassps/datosempresa/datosempresa.component';
import { SolicitantesComponent } from '../modulos/flujocomprassps/solicitantes/solicitantes.component';




const routes: Routes = [
{path:'home' ,component:HomeComponent},
{path:'certimail' ,component:CertimailHomeComponent,
children: [
  {path: 'natural', component:PersonaNComponent},
  {path: 'juridica', component:PersonaJComponent},
  {path:'**' ,component:PersonaNComponent},
  
  ]},

{path:'ssps' ,component:SspsComponent},
{path:'planes' ,component:PlanescertiComponent},
{path: 'ingresocert', component:IngresocertimailComponent},
{path:'validaciones' ,component:ValidacionesComponent,
children: [
  {path: 'natural', component:PersonaNComponent},
  {path: 'juridica', component:PersonaJComponent},
  {path:'**' ,component:PersonaNComponent},
  
  ]
},
{path: 'flujo', component:FlujocomprasspsComponent,
children: [
  {path: 'infobasi', component:InfoBasicaComponent},
  {path: 'pago', component:PagoComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'entrega', component:EntregaComponent},
  {path: 'entregan', component:DatosEntregaNComponent},
  {path: 'facturacion', component:DatosFacturacionComponent},
  {path: 'instalaciones', component:InstalacionesComponent},
  {path: 'pasarela', component:PaceToPlayComponent},
  {path: 'dempresa', component:DatosempresaComponent},
  {path: 'solicitantes', component:SolicitantesComponent},
  {path:'**' ,component:InfoBasicaComponent},
  ]
},
{path: 'ingreso', component:IngresocertimailComponent},
{path:'contacto' ,component:ContactenosComponent,},
{path:'**' ,component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
