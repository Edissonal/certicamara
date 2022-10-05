import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertimailHomeComponent } from '../modulos/certimail/certimail-home/certimail-home.component';
import { HomeComponent } from '../modulos/home/home.component';
import { SspsComponent } from '../modulos/ssps/ssps.component';
import { PlanescertiComponent } from '../modulos/planescerti/planescerti.component';
import { ValidacionesComponent } from '../modulos/validaciones/validaciones.component';
import { PersonaNComponent } from '../modulos/validaciones/persona-n/persona-n.component';
import { PersonaJComponent } from '../modulos/validaciones/persona-j/persona-j.component';




const routes: Routes = [
{path:'home' ,component:HomeComponent,},
{path:'certimail' ,component:CertimailHomeComponent,
children: [
  {path: 'natural', component:PersonaNComponent},
  {path: 'juridica', component:PersonaJComponent},
  {path:'**' ,component:PersonaNComponent},
  
  ]},

{path:'ssps' ,component:SspsComponent},
{path:'planes' ,component:PlanescertiComponent},
{path:'validaciones' ,component:ValidacionesComponent,
children: [
  {path: 'natural', component:PersonaNComponent},
  {path: 'juridica', component:PersonaJComponent},
  {path:'**' ,component:PersonaNComponent},
  
  ]
},
{path:'**' ,component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
