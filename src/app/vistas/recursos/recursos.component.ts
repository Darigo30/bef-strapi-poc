import { Component } from '@angular/core';
import { LibrosComponent } from '../../componentes/libros/libros.component';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [LibrosComponent],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export class RecursosComponent {

}
