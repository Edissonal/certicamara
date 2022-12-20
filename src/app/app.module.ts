import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './rutas/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
/*compoenetes*/
import { AppComponent } from './app.component';
import { DigitoDirective } from './ui/directivas/digito.directive';
import { FooterComponent } from './ui/footer/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar/navbar.component';
import { ModulosModule } from './ui/modulos/modulos/modulos.module';







@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DigitoDirective,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModulosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
