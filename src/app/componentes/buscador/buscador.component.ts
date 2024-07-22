import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarruselNoticiasComponent } from '../carruseles/carrusel-noticias/carrusel-noticias.component';
import { environment } from '../../../environments/environment';
import { ApisService } from '../../servicio/apis/apis.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, CarruselNoticiasComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit{
  @Input() showBackground: boolean = false;
  @Output() clearSearch = new EventEmitter<void>();

  noticias: any = [];
  query: string = '';

  constructor(private router: Router, private ApisService: ApisService) {}

  ngOnInit():void {
    this.cargarNoticias();
    const inputSearch = localStorage.getItem('valorSearch');
    if(inputSearch){
      this.query = inputSearch;
    }
  }

  onSearch() {
    if (this.query) {
      localStorage.setItem('valorSearch', this.query);
      this.router.navigate(['/busqueda'], { queryParams: { query: this.query } });
    }
    else {
      this.router.navigate(['/busqueda']);
    }
  }

  onClearSearch() {
    if (this.query === '') {
      this.clearSearch.emit();
    }
  }

  async cargarNoticias() {
    try {
      const getDataNoticiasService = await this.ApisService.getNoticias();
      this.noticias = BuscadorComponent.extraerNoticias(getDataNoticiasService);
    } catch (error) {
      console.error('Error al cargar la data de noticias desde buscador:', error);
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
      const id = noticia.id;

      if (noticia.attributes.images && noticia.attributes.images.data && noticia.attributes.images.data.length > 0) {
        urlImg = environment.urlBase + noticia.attributes.images.data[0].attributes.url;
      }
      noticiasProcesadas.push({ id: id, titulo: titNoticia, img: urlImg, introtext: introtext, publish_up: publish_up});
    });
    console.log("noticiasProcesadas", noticiasProcesadas);
    return noticiasProcesadas;
  }

  verDetalle(id: number) {
    if (id) {
      this.router.navigate(['/noticias', id]);
    } else {
      console.error('ID de la noticia no válido en BuscadorComponent:', id);
    }
  }

}
