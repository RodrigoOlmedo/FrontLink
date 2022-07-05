import { GenericosService } from './../login/genericos.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FooterComponent implements OnInit {
  meMuestro:boolean=true;
  constructor(private genericosService:GenericosService) { }

  ngOnInit(): void {
    this.genericosService.cambioDeVisibilidad.subscribe((visualizacion:boolean)=>{this.meMuestro=visualizacion;})
  }

}
