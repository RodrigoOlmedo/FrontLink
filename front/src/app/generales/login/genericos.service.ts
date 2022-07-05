import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericosService {
  private estanVisibles: boolean;
  @Output() cambioDeVisibilidad: EventEmitter<boolean>;
  constructor() {
    this.estanVisibles=false;
    this.cambioDeVisibilidad = new EventEmitter();
  }
  public verGenericos(){
    this.estanVisibles=true;
    this.notificarCambio();
  }
  public ocultarGenericos(){
    this.estanVisibles=false;
    this.notificarCambio();
  }
  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.estanVisibles);
  }
}
