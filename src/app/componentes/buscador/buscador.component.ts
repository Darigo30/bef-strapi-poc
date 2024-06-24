import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
export class BuscadorComponent implements OnInit{
  @Input() showBackground: boolean = false;
  @Output() clearSearch = new EventEmitter<void>();
  
  query: string = '';

  constructor(private router: Router) {}

  ngOnInit():void {
    const inputSearch = localStorage.getItem('valorSearch');
    if(inputSearch){
      this.query = inputSearch;
    }
  }

  onSearch() {
    if (this.query) {
      localStorage.setItem('valorSearch', this.query);
      this.router.navigate(['/busqueda'], { queryParams: { query: this.query } });
    }
    else {
      this.router.navigate(['/busqueda']);
    }
  }

  onClearSearch() {
    if (this.query === '') {
      this.clearSearch.emit();
    }
  }

}
