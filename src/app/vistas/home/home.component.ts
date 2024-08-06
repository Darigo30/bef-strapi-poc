import { Component } from '@angular/core';
import { LibrosComponent } from '../../componentes/libros/libros.component';
import { MaterialesEducativosComponent } from '../../componentes/materiales-educativos/materiales-educativos.component';
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';
import { ResenasLibrosComponent } from '../../componentes/resenas-libros/resenas-libros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LibrosComponent, MaterialesEducativosComponent, BuscadorComponent, ResenasLibrosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
