import { Component } from '@angular/core';
import { LibrosComponent } from '../../componentes/libros/libros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LibrosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
