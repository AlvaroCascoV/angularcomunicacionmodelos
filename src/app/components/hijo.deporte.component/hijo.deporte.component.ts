import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  standalone: false,
  templateUrl: './hijo.deporte.component.html',
  styleUrl: './hijo.deporte.component.css',
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPapa: EventEmitter<any> = new EventEmitter();

  //NECESITAMOS UN METODO PARA QUE CADA HIJO REALICE CLICK Y, A SU VEZ,
  //LLAMAMOS AL PARENT
  seleccionarFavoritoHijo(): void {
    //DENTRO DEL emit() ENVIAMOS LOS PARAMETROS QUE NECESITEMOS
    this.seleccionarFavoritoPapa.emit(this.sport);
  }
}
