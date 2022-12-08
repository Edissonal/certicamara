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
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { DigitoDirective } from './directivas/digito.directive';


=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FooterComponent,
<<<<<<< HEAD
    DigitoDirective,

=======
>>>>>>> 6d421f22c532f457b7d4e74b6552484ea27ab72f
  ],
  imports: [
    BrowserModule,
    ModulosModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
