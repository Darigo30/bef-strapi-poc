import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { DataService } from './servicio/data/data.service';
import { FooterComponent } from './componentes/footer/footer.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent, FooterComponent, BuscadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bef-project';
  itemsArrayHeader: any[] = [];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.itemsArrayHeader = this.dataServ.getItemsHeader();
  }
}
