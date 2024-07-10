import { Component } from '@angular/core';
import { CarruselNoticiasComponent } from '../../componentes/carruseles/carrusel-noticias/carrusel-noticias.component';
import { Router } from '@angular/router';
import { ApisService } from '../../servicio/apis/apis.service';
import { environment } from '../../../environments/environment';
import { PaginacionComponent } from '../../componentes/paginacion/paginacion.component';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CarruselNoticiasComponent, PaginacionComponent],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias: any = [];
  noticiasCarrusel: any[] = [];
  noticiasCopia: any[] = [];
  noticiasPaginadas: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number[] = [];

  constructor(private router: Router, private ApisService: ApisService) {}

  paginarNoticias() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.noticiasPaginadas = this.noticiasCopia.slice(startIndex, endIndex);
    console.log("noticiasPaginadas", this.noticiasPaginadas);
  }

  cambiarPagina(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.paginarNoticias();
    }
  }

  ngOnInit() {
    this.cargarNoticias();
  }

  async cargarNoticias() {
    try {
      const getDataNoticiasService = await this.ApisService.getNoticias();
      this.noticias = NoticiasComponent.extraerNoticias(getDataNoticiasService);
      // Mostrar solo 3 noticias en carrusel 
      this.noticiasCarrusel = this.noticias.slice(0, 3);
      // Mostrar en las cards desde la noticia 4 en adelante 
      this.noticiasCopia = this.noticias.slice(3);
      console.log("noticiasCopia", this.noticiasCopia);

      // Calcular número total de páginas
      this.totalPages = Array(Math.ceil(this.noticiasCopia.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
      this.paginarNoticias();

    } catch (error) {
      console.error('Error al cargar la data de noticias desde noticias:', error);
    }
  }

  static extraerNoticias(dataNoticias: any): any[] {
    const noticiasProcesadas: any[] = [];
    const noticiasLimitadasPage = dataNoticias.data;

    noticiasLimitadasPage.forEach((noticia: any) => {
      const titNoticia = noticia.attributes.title;
      const introtext = noticia.attributes.introtext;
      const publish_up = noticia.attributes.publish_up;
      let urlImg = '';

      if (noticia.attributes.images && noticia.attributes.images.data && noticia.attributes.images.data.length > 0) {
        urlImg = environment.urlBase + noticia.attributes.images.data[0].attributes.url;
      }
      noticiasProcesadas.push({ titulo: titNoticia, img: urlImg, introtext: introtext, publish_up: publish_up });
    });
    console.log("noticiasProcesadas", noticiasProcesadas);
    return noticiasProcesadas;
  }

  onHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
