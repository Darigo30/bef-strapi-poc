import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { DataService } from './servicio/data/data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bef-project';
  itemsArrayHeader: any[] = [];

  constructor(private dataServ: DataService) { }

  /**
   * La función ngOnInit inicializa la propiedad itemsArrayHeader
   * llamando al servicio con el método getItemsHeader
   * del tipo dataServ
   */
  ngOnInit(): void {
    this.itemsArrayHeader = this.dataServ.getItemsHeader();
  }
}
