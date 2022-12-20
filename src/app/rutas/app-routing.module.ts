import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../ui/modulos/home/home.component';
import { CertimailHomeComponent } from '../ui/modulos/certimail/certimail-home/certimail-home.component';
import { PersonaNComponent } from '../ui/modulos/validaciones/persona-n/persona-n.component';
import { PersonaJComponent } from '../ui/modulos/validaciones/persona-j/persona-j.component';
import { SspsComponent } from '../ui/modulos/ssps/ssps.component';
import { PlanescertiComponent } from '../ui/modulos/planescerti/planescerti.component';
import { IngresocertimailComponent } from '../ui/modulos/ingresocertimail/ingresocertimail.component';
import { ValidacionesComponent } from '../ui/modulos/validaciones/validaciones.component';
import { FlujocomprasspsComponent } from '../ui/modulos/flujocomprassps/flujocomprassps.component';
import { InfoBasicaComponent } from '../ui/modulos/flujocomprassps/info-basica/info-basica.component';
import { PagoComponent } from '../ui/modulos/flujocomprassps/pago/pago.component';
import { ContactoComponent } from '../ui/modulos/flujocomprassps/contacto/contacto.component';
import { EntregaComponent } from '../ui/modulos/flujocomprassps/entrega/entrega.component';
import { DatosEntregaNComponent } from '../ui/modulos/flujocomprassps/datos-entrega-n/datos-entrega-n.component';
import { DatosFacturacionComponent } from '../ui/modulos/flujocomprassps/datos-facturacion/datos-facturacion.component';
import { InstalacionesComponent } from '../ui/modulos/flujocomprassps/instalaciones/instalaciones.component';
import { PaceToPlayComponent } from '../ui/modulos/flujocomprassps/pace-to-play/pace-to-play.component';
import { DatosempresaComponent } from '../ui/modulos/flujocomprassps/datosempresa/datosempresa.component';
import { SolicitantesComponent } from '../ui/modulos/flujocomprassps/solicitantes/solicitantes.component';
import { ContactenosComponent } from '../ui/modulos/contactenos/contactenos.component';







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
