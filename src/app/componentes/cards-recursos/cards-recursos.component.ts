import { Component, Input, OnInit } from '@angular/core';
import { PaginacionComponent } from '../paginacion/paginacion.component';


@Component({
  selector: 'app-cards-recursos',
  standalone: true,
  imports: [PaginacionComponent],
  templateUrl: './cards-recursos.component.html',
  styleUrl: './cards-recursos.component.css'
})
export class CardsRecursosComponent implements OnInit{
  @Input () libros: any = [];
  librosPaginados: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number[] = [];

  ngOnInit(): void {
    this.calcularTotalPaginas();
    this.paginarLibros();

    this.librosPaginados = this.libros.slice(1)
    console.log('librosPaginadosjeje:', this.librosPaginados);
    
    console.log('Página actual:', this.currentPage);
  }
  calcularTotalPaginas() {
    this.totalPages = Array(Math.ceil(this.libros.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
    console.log('Total de páginas:', this.totalPages);
  }

  paginarLibros() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.libros.slice(startIndex, endIndex);
    console.log("cortao", this.libros.slice(startIndex, endIndex));
  }

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.paginarLibros();
    }
    console.log('Página actual al cambair pagina:', this.currentPage);
  }
}
