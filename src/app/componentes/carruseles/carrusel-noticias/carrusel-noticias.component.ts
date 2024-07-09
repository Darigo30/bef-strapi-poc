import { Component, ViewEncapsulation, Input } from '@angular/core'; // se usa el viewEncapsulation para que los estilos de este componente no afecten a otros componentes

@Component({
  selector: 'app-carrusel-noticias',
  standalone: true,
  imports: [],
  templateUrl: './carrusel-noticias.component.html',
  styleUrl: './carrusel-noticias.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CarruselNoticiasComponent {

@Input() noticias: any = [];
currentIndex = 0;

get mostrarPrimerItem(): boolean {
  return this.currentIndex === 0 && this.noticias.length > 0;
}

get mostrarSegundoItem(): boolean {
  return this.currentIndex === 1 && this.noticias.length > 1;
}

get mostrarTercerItem(): boolean {
  return this.currentIndex === 2 && this.noticias.length > 2;
}

siguiente() {
  if (this.currentIndex < this.noticias.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
}

anterior() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.noticias.length - 1;
  }
}

}
