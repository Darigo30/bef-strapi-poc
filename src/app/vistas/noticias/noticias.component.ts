import { Component } from '@angular/core';
import { CarruselNoticiasComponent } from '../../componentes/carruseles/carrusel-noticias/carrusel-noticias.component';
import { Router } from '@angular/router';
import { ApisService } from '../../servicio/apis/apis.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CarruselNoticiasComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticias: any = [];
  noticiasCarrusel: any[] = [];

  constructor(private router: Router, private ApisService: ApisService) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  async cargarNoticias() {
    try {
      const getDataNoticiasService = await this.ApisService.getNoticias();
      this.noticias = NoticiasComponent.extraerNoticias(getDataNoticiasService);
      this.noticiasCarrusel = this.noticias.slice(0, 3);
    } catch (error) {
      console.error('Error al cargar la data de noticias:', error);
    }
  }

  static extraerNoticias(dataNoticias: any): any[] {
    const noticiasProcesadas: any[] = [];
    const noticiasLimitadasPage = dataNoticias.data.slice(0, 8);

    noticiasLimitadasPage.forEach((noticia: any) => {
      const titNoticia = noticia.attributes.title;
      const introtext = noticia.attributes.introtext;
      const publish_up = noticia.attributes.publish_up;
      let urlImg = '';

      if (noticia.attributes.images && noticia.attributes.images.data && noticia.attributes.images.data.length > 0) {
        urlImg = environment.urlBase + noticia.attributes.images.data[0].attributes.url;
      }
      noticiasProcesadas.push({ titulo: titNoticia, img: urlImg, introtext: introtext, publish_up: publish_up});
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
