import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ConfigComponent } from './config/config.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearReporteComponent } from './crear-reporte/crear-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    LoginComponent,
    AyudaComponent,
    ConfigComponent,
    ReportesComponent,
    CrearReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
