import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralesComponent } from './generales.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [GeneralesComponent, FooterComponent, HeaderComponent, PrincipalComponent, LoginComponent, ProductosComponent, PaginaNoEncontradaComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductosComponent
  ]
})
export class GeneralesModule { }
