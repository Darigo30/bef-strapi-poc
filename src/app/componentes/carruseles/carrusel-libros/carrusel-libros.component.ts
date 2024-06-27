import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel-libros',
  standalone: true,
  imports: [],
  templateUrl: './carrusel-libros.component.html',
  styleUrl: './carrusel-libros.component.css'
})
export class CarruselLibrosComponent {

  @Input () libros: any = [];
  @Input () cantidadLibrosInicial1 = 0;
  @Input () cantidadLibrosFinal1 = 3;
  @Input () cantidadLibrosInicial2 = 3;
  @Input () cantidadLibrosFinal2 = 12;
  @Input () mostrarVerTodas = true;


  get visibleLibros1() {
    return this.libros.slice(this.cantidadLibrosInicial1, this.cantidadLibrosFinal1);
  }

  get visibleLibros2() {
    return this.libros.slice(this.cantidadLibrosInicial2, this.cantidadLibrosFinal2);
  }

}
