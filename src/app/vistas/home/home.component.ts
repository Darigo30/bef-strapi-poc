import { Component } from '@angular/core';
import { LibrosComponent } from '../../componentes/libros/libros.component';
import { MaterialesEducativosComponent } from '../../componentes/materiales-educativos/materiales-educativos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LibrosComponent, MaterialesEducativosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
