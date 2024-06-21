import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../../servicio/apis/apis.service';
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';
import { CarruselLibrosComponent } from '../../componentes/carruseles/carrusel-libros/carrusel-libros.component';
import { CarruselMaterialesComponent } from '../../componentes/carruseles/carrusel-materiales/carrusel-materiales.component';
import { LibrosComponent } from '../../componentes/libros/libros.component';
import { MaterialesEducativosComponent } from '../../componentes/materiales-educativos/materiales-educativos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busquedaresult',
  standalone: true,
  imports: [BuscadorComponent, CarruselLibrosComponent, CarruselMaterialesComponent],
  templateUrl: './busquedaresult.component.html',
  styleUrl: './busquedaresult.component.css'
})

export class BusquedaresultComponent implements OnInit{
  query: string = '';
  libros: any[] = [];
  materialesEducativos: any[] = [];

  constructor(private route: ActivatedRoute, private apisService: ApisService, private router: Router) {}

  ngOnInit(): void {
    this.cargarLibros();
    this.cargarMaterialesEducativos();

    this.route.queryParams.subscribe(params => {
      this.query = (params['query'] || '').toLowerCase();
      if (this.query) {
        this.search();
      }
    });
  }

  async cargarLibros() {
    try {
      const getDataLibrosService = await this.apisService.getLibros();
      this.libros = LibrosComponent.extraerLibros(getDataLibrosService);

    } catch (error) {
      console.error('Error al consultar la data:', error);
    }
  }

  async search() {
    try {
      const dataLibros = await this.apisService.getLibros();
      const todoLosLibros = LibrosComponent.extraerLibros(dataLibros);
      this.libros = todoLosLibros.filter((element: any) => element.titulo.toLowerCase().includes(this.query));
      //Materiales Educativos
      const dataMaterialesEducativos = await this.apisService.getMaterialesEducativos();
      const todoLosMaterialesEducativos = MaterialesEducativosComponent.extraerMaterialesEducativos(dataMaterialesEducativos);
      this.materialesEducativos = todoLosMaterialesEducativos.filter((element: any) => element.titulo.toLowerCase().includes(this.query));
    } catch (error) {
      console.error('Error al consultar la data:', error);
    }
  }

  //Materiales Educativos 

  async cargarMaterialesEducativos() {
    try {
      const getDataMaterialesEducativosService = await this.apisService.getMaterialesEducativos();
      this.materialesEducativos = MaterialesEducativosComponent.extraerMaterialesEducativos(getDataMaterialesEducativosService);

    } catch (error) {
      console.error('Error al consultar la data de materiales educativos:', error);
    }
  }


  onHome() {
    this.router.navigate(['/']);
  }
}
