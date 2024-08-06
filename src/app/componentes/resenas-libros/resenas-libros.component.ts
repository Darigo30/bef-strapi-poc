import { Component, Input, OnInit } from '@angular/core';
import { ApisService } from '../../servicio/apis/apis.service';
import { CarruselResenaLibrosComponent } from '../carruseles/carrusel-resena-libros/carrusel-resena-libros.component';


@Component({
  selector: 'app-resenas-libros',
  standalone: true,
  imports: [CarruselResenaLibrosComponent],
  templateUrl: './resenas-libros.component.html',
  styleUrl: './resenas-libros.component.css'
})
export class ResenasLibrosComponent implements OnInit {
  @Input () resenasLibros: any = [];

  constructor(private ApisService: ApisService) {}

  ngOnInit(): void {
    this.cargarResenasLibros();
  }

  async cargarResenasLibros() {
    try {
      const getDataResenasLibros = await this.ApisService.getResenasLibros();
      this.resenasLibros = ResenasLibrosComponent.extraerResenasLibros(getDataResenasLibros);
      console.log('Resenas de Libros:', getDataResenasLibros);
    } catch (error) {
      console.error('Error al cargar la data de resenas de libros:', error);
    }
  }

  static extraerResenasLibros(dataResenasLibros: any): any {
    const resenasProcesadas: any[] = [];
    dataResenasLibros.data.forEach((resena: any) => {
      const bajada = resena.attributes.Bajada;
      const autorResena = resena.attributes.Nombreyapellido;
      const cargo = resena.attributes.Cargo;
      const fecha = resena.attributes.Fecha;
      resenasProcesadas.push({bajada: bajada, autor: autorResena, cargo: cargo, fecha: fecha});
    });
    return resenasProcesadas;
  }
}
