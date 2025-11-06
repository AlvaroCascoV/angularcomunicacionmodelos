import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  templateUrl: './padre.deportes.component.html',
  styleUrl: './padre.deportes.component.css',
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje: string;

  //NECESITAMOS UN METODO QUE RECIBIRA EVENT QUE VA A SER CUALQUIER TIPADO
  seleccionarFavoritoPadre(event: any): void {
    this.mensaje = 'Tu deporte favorito es ' + event;
    console.log(this.mensaje);
  }

  constructor() {
    this.deportes = ['Futbol', 'Basket', 'Beisbol', 'Natacion', 'Dados'];
    this.mensaje = '';
  }
}
