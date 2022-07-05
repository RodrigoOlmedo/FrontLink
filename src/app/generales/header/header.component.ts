import { VistaRolService } from './../login/vista-rol.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit } from '@angular/core';
import { GenericosService } from '../login/genericos.service';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit, AfterViewInit {
  meMuestro:boolean=true;
  vista=localStorage.getItem('rol');
  nombre=localStorage.getItem('nombre');
  constructor(private genericosService:GenericosService, private router: Router, private vistaRol:VistaRolService) { }

  ngOnInit(): void {
    this.genericosService.cambioDeVisibilidad.subscribe((visualizacion:boolean)=>{this.meMuestro=visualizacion;})
  }
  ngAfterViewInit(): void {
    this.vistaRol.cambioDeVista.subscribe((nuevaVista:string|null)=>{this.vista=nuevaVista});
  }
  verCarrito(){
    this.router.navigateByUrl("/carrito");
  }
  salir(){
    localStorage.removeItem('rol');
    localStorage.removeItem('id');
    localStorage.removeItem('nombre');
    this.nombre=localStorage.getItem('nombre');
    alert("Saliste de tu cuenta");
    this.vistaRol.cambioDeRol(localStorage.getItem('rol'));
    this.router.navigateByUrl("/inicio");
  }
}
