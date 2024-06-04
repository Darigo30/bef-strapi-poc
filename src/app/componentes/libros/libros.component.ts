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

  constructor(private ApisService: ApisService) {}

  ngOnInit() {
    this.ApisService.getLibros().then((dataLibros) => {
      dataLibros.data.forEach((element: any) => {
        const titLibro = element.attributes.titulo;
        const autorLibro = element.attributes.NombreAutor;
        const resumenLibro = element.attributes.Resumen;
        const tipoLibro = element.attributes.TipodeLibro;
        const LinkDescargar = element.attributes.LinkDescargar;
        const LinkLeerLibro = element.attributes.LinkLeerLibro;
        element.attributes.Imagen.data.forEach((foto: any) => {
          let urlImg = environment.urlBase + foto.attributes.url;
          this.libros.push({titulo: titLibro, url: urlImg, autor: autorLibro, resumen: resumenLibro, tipo: tipoLibro, descargar: LinkDescargar, leer: LinkLeerLibro});
        });
      });
      console.log("libros", this.libros);
    });  
  }
}


