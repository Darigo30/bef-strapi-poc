import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../../servicio/apis/apis.service';
import { environment } from '../../../environments/environment';
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { shareIcons } from 'ngx-sharebuttons/icons';



@Component({
  selector: 'app-noticias-detalles',
  standalone: true,
  imports: [ShareButtons],
  templateUrl: './noticias-detalles.component.html',
  styleUrls: ['./noticias-detalles.component.css'],

})
export class NoticiasDetallesComponent implements OnInit {

  noticia: any;
  imageUrl: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private apisService: ApisService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarNoticia(Number(id));
    }
  }

  async cargarNoticia(id: number) {
    try {
      const dataDetalleNoticia = await this.apisService.getNoticiaById(id);
      console.log('dataNoticia servicio', dataDetalleNoticia);

      const noticiaElement = dataDetalleNoticia.data;

      if (noticiaElement && noticiaElement.attributes) {
        const { title, introtext, fulltext, publish_up, images } = noticiaElement.attributes;

        let imageUrls: string[] = [];
        if (images && images.data && images.data.length > 0) {
          //imageUrl = `${environment.urlBase}${images.data[0].attributes.url}`;
          //recorrer las data para extraer las imagenes que existan 
          images.data.forEach((element: any) => {
            const imageUrl = `${environment.urlBase}${element.attributes.url}`;
            imageUrls.push(imageUrl);
            
          });
        } else if (typeof images === 'string') {
          const parsedImages = JSON.parse(images.replace(/\\/g, ''));
          if (parsedImages.image_intro) {
            imageUrls.push(`${environment.urlBase}/${parsedImages.image_intro}`);
          }
        } else {
          imageUrls.push('No hay imagen en la noticia');
        }

        this.imageUrl  = imageUrls;

        console.log('this.imageUrl', this.imageUrl);

        this.noticia = { 
          titulo: title,
          introtext: introtext,
          fulltext: fulltext,
          publish_up: publish_up,
          images: this.imageUrl
        };
      } else {
        console.error('No se encontraron datos de la noticia');
      }
    } catch (error) {
      console.error('Error al cargar la noticia - detalle:', error);
    }
  }

  onHome() {
    this.router.navigate(['/']).then(() => window.location.reload());
  }

  onNoticias() {
    this.router.navigate(['/noticias']);
  }
}
