import { Component, Input } from '@angular/core';
import { BuscadorComponent } from '../buscador/buscador.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  
  @Input() itemHeader: any[] = []

  onHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}


