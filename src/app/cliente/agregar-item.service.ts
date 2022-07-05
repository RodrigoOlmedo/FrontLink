import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarItemService {
  url:string=environment.urlCarrito
  constructor(private http:HttpClient) {}
  public agregarItem(producto:any, cantidad:number){
    var idCliente=localStorage.getItem('id');
    console.log(idCliente);
    console.log(producto.idProducto, cantidad)
    return this.http.post(this.url+"/cliente/"+idCliente+"/"+producto.idProducto+"/"+cantidad,{}) //intente mandar el producto y la cantidad a traves del body pero no pude
  }
}
