import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel-resena-libros',
  standalone: true,
  imports: [],
  templateUrl: './carrusel-resena-libros.component.html',
  styleUrl: './carrusel-resena-libros.component.css'
})
export class CarruselResenaLibrosComponent {
  @Input () resenasLibros: any = [];
  @Input () cantidadResenasInicial1 = 0;
  @Input () cantidadResenasFinal1 = 2;
  @Input () cantidadResenasInicial2 = 2;
  @Input () cantidadResenasFinal2 = 4;
  @Input () mostrarVerTodas = true;

  get visibleResenas1() {
    return this.resenasLibros.slice(this.cantidadResenasInicial1, this.cantidadResenasFinal1);
  }

  get visibleResenas2() {
    return this.resenasLibros.slice(this.cantidadResenasInicial2, this.cantidadResenasFinal2);
  }
}
