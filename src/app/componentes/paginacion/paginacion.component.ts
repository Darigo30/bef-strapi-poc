import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number[] = [];
  @Output() pageChanged = new EventEmitter<number>();

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.pageChanged.emit(page);
      console.log('Página actual paginacion:', page);
    }
  }

}
