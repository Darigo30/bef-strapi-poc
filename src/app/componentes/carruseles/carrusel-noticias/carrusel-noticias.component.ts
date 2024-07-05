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


currentIndex: number = 0;

setCurrentIndex(index: number): void {
  this.currentIndex = index;
}

}
