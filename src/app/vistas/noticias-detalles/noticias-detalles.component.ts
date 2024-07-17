import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../../servicio/apis/apis.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-noticias-detalles',
  templateUrl: './noticias-detalles.component.html',
  styleUrls: ['./noticias-detalles.component.css']
})
export class NoticiasDetallesComponent implements OnInit {

  noticia: any; 
  imageUrl: string = '';

  constructor(private route: ActivatedRoute, private apisService: ApisService, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el id de la noticia
    this.cargarNoticia(Number(id));
    console.log('id desde el detalle', id);
  }

  async cargarNoticia(id: number) {
    try {
      const dataDetalleNoticia = await this.apisService.getNoticiaById(id);
      const noticiaElements = dataDetalleNoticia.data;

      // Iterar sobre el array para encontrar la noticia correcta
      noticiaElements.forEach((noticiaElement: any) => {
        if (noticiaElement.id === id) {
          const titNoticia = noticiaElement.attributes.title;
          const introtext = noticiaElement.attributes.introtext;
          const fulltext = noticiaElement.attributes.fulltext;
          const publish_up = noticiaElement.attributes.publish_up;
          let images = '';

          // Comprobar si hay imágenes y obtener la URL
          if (noticiaElement.attributes.images && noticiaElement.attributes.images.data && noticiaElement.attributes.images.data.length > 0) {
            images = environment.urlBase + noticiaElement.attributes.images.data[0].attributes.url;
          }

          this.noticia = { 
            titulo: titNoticia,
            introtext: introtext,
            fulltext: fulltext,
            publish_up: publish_up,
            images: images
          };
        }
      });

      console.log('noticia', this.noticia);
      console.log('imageUrl', this.imageUrl);
    } catch (error) {
      console.error('Error al cargar la noticia - detalle:', error);
    }
  }

  onHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  onNoticias() {
    this.router.navigate(['/noticias']);
  } 
}
