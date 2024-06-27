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
  @Input () cantidadMaterialesInicial1 = 0;
  @Input () cantidadMaterialesFinal1 = 3;
  @Input () cantidadMaterialesInicial2 = 3;
  @Input () cantidadMaterialesFinal2 = 6;
  @Input () mostrarVerTodas = true;

  get visibleMateriales1() {
    return this.materialesEducativos.slice(this.cantidadMaterialesInicial1, this.cantidadMaterialesFinal1);
  }

  get visibleMateriales2() {
    return this.materialesEducativos.slice(this.cantidadMaterialesInicial2, this.cantidadMaterialesFinal2);
  }
}

