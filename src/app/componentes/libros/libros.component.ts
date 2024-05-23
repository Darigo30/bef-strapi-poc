import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../servicio/apis/apis.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{

  libros: any = [];

  currentRating: number = 0;
  ratings: number[] = [];
  user = "Darita Gómez";

  constructor(private ApisService: ApisService) {}

  ngOnInit() {
    this.ApisService.getLibros().then((dataLibros) => {
      dataLibros.data.forEach((element: any) => {
        const titLibro = element.attributes.titulo;
        element.attributes.Imagen.data.forEach((foto: any) => {
          let urlImg = environment.urlBase + foto.attributes.url;
          this.libros.push({titulo: titLibro, url: urlImg});
        });
      });
    });  
  }
}


