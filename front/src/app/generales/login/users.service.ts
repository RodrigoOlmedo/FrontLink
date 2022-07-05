import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url=environment.urlUsuarios;
  constructor(
    private http:HttpClient
  ) { }
  public buscarUsuario(user:string, password:string){
    /////search/usuario?usuario=user&contrasenia=password
    return this.http.get(this.url+"/search/usuario?usuario="+user+"&contrasenia="+password);
 }
}
