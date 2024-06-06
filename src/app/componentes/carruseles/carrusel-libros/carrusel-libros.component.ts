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

}
