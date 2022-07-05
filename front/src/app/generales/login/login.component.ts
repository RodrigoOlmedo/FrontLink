import { VistaRolService } from './vista-rol.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericosService } from './genericos.service';
import { UsersService } from './users.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup|null;
  constructor(
    private router:Router,
    private genericosService:GenericosService,
    private formBuilder:FormBuilder,
    private usersService:UsersService,
    private vistaRol:VistaRolService
    ) {this.formulario=null; }

  ngOnInit(): void {
    this.genericosService.ocultarGenericos();
    this.iniciarFormulario();
  }
  private iniciarFormulario(){
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }
  public onSumbit(){
  var usuario = this.formulario?.get('usuario')?.value;
  var contrasenia = this.formulario?.get('contrasenia')?.value;
  this.usersService.buscarUsuario(usuario,contrasenia).subscribe((usuarioX:any) =>
      { //if usuario distinto de null
        localStorage.setItem('rol',usuarioX.tipoDeRol);
        localStorage.setItem('id',usuarioX.id);
        localStorage.setItem('nombre',usuarioX.nombre);
        this.vistaRol.cambioDeRol(localStorage.getItem('rol'));
        this.router.navigateByUrl('/inicio');
      }
    );

  }
}
