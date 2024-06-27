import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../../servicio/apis/apis.service';
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';
import { CarruselLibrosComponent } from '../../componentes/carruseles/carrusel-libros/carrusel-libros.component';
import { CarruselMaterialesComponent } from '../../componentes/carruseles/carrusel-materiales/carrusel-materiales.component';
import { LibrosComponent } from '../../componentes/libros/libros.component';
import { MaterialesEducativosComponent } from '../../componentes/materiales-educativos/materiales-educativos.component';


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
      this.query = (params['query'] || '').toLowerCase().trim();
      if (this.query) {
        this.search();
      }
    });
  }

  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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
     
      if(this.query) {
        const normalizarPalabras = this.normalizeText(this.query);
        const queryPalabrasBusqueda = normalizarPalabras.split(' ').filter(palabra => palabra.length > 0);

        this.libros = this.libros.filter((element: any) => {
          const titulo = this.normalizeText(element.titulo.toLowerCase());
          return queryPalabrasBusqueda.every(palabra => titulo.includes(palabra));
        });
      } else {
        this.libros = todoLosLibros
      }


      //Materiales Educativos
      const dataMaterialesEducativos = await this.apisService.getMaterialesEducativos();
      const todoLosMaterialesEducativos = MaterialesEducativosComponent.extraerMaterialesEducativos(dataMaterialesEducativos);

      if(this.query){
        const normalizarPalabrasMateriales = this.normalizeText(this.query);
        const queryPalabrasBusqueda = normalizarPalabrasMateriales.split(' ').filter(palabra => palabra.length > 0);

        this.materialesEducativos = todoLosMaterialesEducativos.filter((element: any) => {
          const titulo = this.normalizeText(element.titulo.toLowerCase());
          return queryPalabrasBusqueda.every(palabra => titulo.includes(palabra));
        });
      } else {
        this.materialesEducativos = todoLosMaterialesEducativos;
      }

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

  onClearSearch() {
    localStorage.removeItem('valorSearch');
    this.query = '';
    this.router.navigate(['/busqueda']).then(() => {
     this.search()
    });
  }

  onHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
