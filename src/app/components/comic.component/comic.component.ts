import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Input() index!: number;
  @Output() seleccionarFav: EventEmitter<any> = new EventEmitter<any>();
  @Output() borrarComic: EventEmitter<any> = new EventEmitter<any>();

  marcarFavorito(): void {
    this.seleccionarFav.emit(this.comic);
  }

  eliminarComic(): void {
    this.borrarComic.emit(this.index);
  }
}
