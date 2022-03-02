import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', component: InicioComponent 
  },
  {
    path: 'Registro', component: RegistroComponent
  },
  {
    path: 'Login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
