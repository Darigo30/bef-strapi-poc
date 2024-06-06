import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel-materiales',
  standalone: true,
  imports: [],
  templateUrl: './carrusel-materiales.component.html',
  styleUrl: './carrusel-materiales.component.css'
})
export class CarruselMaterialesComponent {
  @Input () materialesEducativos: any = [];
}
