import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { PreciosComponent } from './components/precios/precios.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { ListadoInscripcionesComponent } from './components/listado-inscripciones/listado-inscripciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'inscripcion', pathMatch: 'full'},
  { path: 'inscripcion', component: InscripcionComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listado-cliente', component: ListadoClientesComponent },
  { path: 'agregar-cliente', component: AgregarClienteComponent},
  { path: 'agregar-cliente/:id_cliente', component: AgregarClienteComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'precios', component: PreciosComponent},
  { path: 'listado-inscripciones', component: ListadoInscripcionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
