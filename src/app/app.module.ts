import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/*compoenentes*/
import { FooterComponent } from './footer/footer/footer.component';
import { ModulosModule } from './modulos/modulos/modulos.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AppRoutingModule } from './rutas/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
