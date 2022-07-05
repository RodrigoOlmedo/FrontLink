import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url:string = environment.urlProductos;
  constructor(
    private http: HttpClient
    ) { }

  public getAll(){
    return this.http.get(this.url);
  }
  public getProducto(id:string){
    return this.http.get(this.url+"/"+id);
  }
}
