import { VistaRolService } from './../login/vista-rol.service';
import { GenericosService } from './../login/genericos.service';
import { Router } from '@angular/router';
import { ProductoService } from './../productos/producto.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, AfterViewInit {
  productos: any;
  vista=localStorage.getItem('rol');
  constructor(
    private productosService: ProductoService,
    private router: Router,
    private genericosService:GenericosService,
    private vistaRol:VistaRolService
    ) { }
  ngAfterViewInit(): void {
    this.vistaRol.cambioDeVista.subscribe((nuevaVista:string|null)=>{this.vista=nuevaVista});
  }

  ngOnInit(): void {
    this.productosService.getAll().subscribe((productosX:any)=>{this.productos=productosX._embedded.productoes});
    this.genericosService.verGenericos();
  }
  public verProducto(id:string){
    console.log(id);
    this.router.navigateByUrl('/producto/'+id);
  }
}
