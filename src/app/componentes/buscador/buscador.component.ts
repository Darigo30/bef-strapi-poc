import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarruselNoticiasComponent } from '../carruseles/carrusel-noticias/carrusel-noticias.component';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, CarruselNoticiasComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Input() showBackground: boolean = false;
  query: string = '';

  constructor(private router: Router) {}

  onSearch() {
    if (this.query) {
      this.router.navigate(['/busqueda'], { queryParams: { query: this.query } });
    }
    else if (!this.query) {
      this.router.navigate(['/busqueda']);
    }
  }

 

}
