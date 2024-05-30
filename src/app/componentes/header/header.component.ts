import { Component, Input } from '@angular/core';
import { BuscadorComponent } from '../buscador/buscador.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() itemHeader: any[] = []
}


