import { Component } from '@angular/core';
import { LibrosComponent } from '../../componentes/libros/libros.component';
import { MaterialesEducativosComponent } from '../../componentes/materiales-educativos/materiales-educativos.component';
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LibrosComponent, MaterialesEducativosComponent, BuscadorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
