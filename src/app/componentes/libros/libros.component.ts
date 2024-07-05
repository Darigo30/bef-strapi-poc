import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../servicio/apis/apis.service';
import { environment } from '../../../environments/environment';
import { CarruselLibrosComponent } from '../carruseles/carrusel-libros/carrusel-libros.component';


@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CarruselLibrosComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{

  libros: any = [];

  constructor(private ApisService: ApisService) {}

  ngOnInit() {
   this.cargarLibros();
  }

  async cargarLibros() {
    try {
      const getDataLibrosService = await this.ApisService.getLibros();
      this.libros = LibrosComponent.extraerLibros(getDataLibrosService);
      console.log('Libros:', this.libros);
    } catch (error) {
      console.error('Error al cargar la data de libros:', error);
    }
  }

  
  static extraerLibros(dataLibros: any): any[] {
    const librosProcesados: any[] = [];
    dataLibros.data.forEach((libro: any) => {
      const titLibro = libro.attributes.titulo;
      const autorLibro = libro.attributes.NombreAutor;
      const resumenLibro = libro.attributes.Resumen;
      const tipoLibro = libro.attributes.TipodeLibro;
      const LinkDescargar = libro.attributes.LinkDescargar;
      const LinkLeerLibro = libro.attributes.LinkLeerLibro;
      libro.attributes.Imagen.data.forEach((foto: any) => {
        const urlImg = environment.urlBase + foto.attributes.url;
        librosProcesados.push({ titulo: titLibro, url: urlImg, autor: autorLibro, resumen: resumenLibro, tipo: tipoLibro, descargar: LinkDescargar, leer: LinkLeerLibro });
      });
    });
    return librosProcesados;
  }

}


