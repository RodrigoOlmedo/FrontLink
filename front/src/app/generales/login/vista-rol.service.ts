import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VistaRolService {
  private vistaRol: string|null;
  @Output() cambioDeVista: EventEmitter<string|null>;
  constructor() {
    this.vistaRol=null;
    this.cambioDeVista = new EventEmitter();
  }
  public cambioDeRol(rolNuevo:string|null){
    this.vistaRol=rolNuevo
    this.notificarCambio();
  }
  private notificarCambio(){
    this.cambioDeVista.emit(this.vistaRol);
  }
}
