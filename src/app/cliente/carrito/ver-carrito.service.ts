import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerCarritoService {
  url = environment.urlCarrito
  constructor(private http:HttpClient) { }
  public getItems(){
    let clienteId=localStorage.getItem('id');
    return this.http.get(this.url+"/cliente/"+clienteId);
  }
}
