import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {
  url = environment.urlOrdenes
  constructor(private http:HttpClient) { }
  public comprar(){
    let idCliente = localStorage.getItem('id');
    console.log(1);
    return this.http.post(this.url+idCliente+"/ordenes",{});
  }
}
