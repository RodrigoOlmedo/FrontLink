import { AgregarItemService } from './../../cliente/agregar-item.service';
import { ProductoService } from './producto.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosComponent implements OnInit {
  productoId: any;
  producto:any;
  cantidad=1;
  constructor(
    private ruta: ActivatedRoute,
    private productoService: ProductoService,
    private agregarItemService: AgregarItemService
    ) {}

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.productoId = params.get('id');
    });
    this.productoService.getProducto(this.productoId).subscribe((productoX:any)=>this.producto=productoX);
  }

  public aumentarCantidad(){
    if(this.cantidad<this.producto.stock){
      this.cantidad++;
    }
  }
  public restarCantidad(){
    if(this.cantidad>1){
      this.cantidad--;
    }
  }
  public agregarACarrito(){
    console.log("llamada a service");
    this.agregarItemService.agregarItem(this.producto,this.cantidad).subscribe((respuesta:any)=>{});
  }
}
