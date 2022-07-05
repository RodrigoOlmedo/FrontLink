import { Router } from '@angular/router';
import { ComprarService } from './comprar.service';
import { VerCarritoService } from './ver-carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  items:any
  carrito:any
  nombreUsuario = localStorage.getItem('nombre');
  constructor(private carritoService:VerCarritoService,private comprarService:ComprarService, private router:Router) { }

  ngOnInit(): void {
    this.carritoService.getItems().subscribe((carritoX:any)=>{this.items=carritoX.items;this.carrito=carritoX});

  }
  realizarCompra(){
    this.comprarService.comprar().subscribe((respuesta:any)=>{});
    this.router.navigateByUrl('/inicio');
  }
  hayItems(): boolean{
    return this.items.length>0
  }

}
