import { CarritoComponent } from './cliente/carrito/carrito.component';
import { PrincipalComponent } from './generales/principal/principal.component';
import { LoginComponent } from './generales/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './generales/productos/productos.component';
import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path:"inicio",component: PrincipalComponent},
  {path:"login",component:LoginComponent},
  {path: 'producto/:id', component: ProductosComponent},
  {path:'carrito',component:CarritoComponent},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
