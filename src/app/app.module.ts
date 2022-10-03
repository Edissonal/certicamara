import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/*compoenentes*/
import { FooterComponent } from './footer/footer/footer.component';
import { ModulosModule } from './modulos/modulos/modulos.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RutasRoutingModule } from './rutas/rutas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    ModulosModule,
    RutasRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
