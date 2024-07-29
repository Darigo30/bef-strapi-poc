import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../../servicio/apis/apis.service';
import { environment } from '../../../environments/environment';
import { NoticiasRelacionadasComponent } from '../../componentes/noticias-relacionadas/noticias-relacionadas.component';
@Component({
  selector: 'app-noticias-detalles',
  standalone: true,
  imports: [NoticiasRelacionadasComponent],
  templateUrl: './noticias-detalles.component.html',
  styleUrls: ['./noticias-detalles.component.css'],

})
export class NoticiasDetallesComponent implements OnInit {

  noticia: any;
  imageUrl: string[] = [];
  idNoticia: string = '';

  constructor(
    private route: ActivatedRoute,
    private apisService: ApisService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('NoticiasDetallesComponent', NoticiasRelacionadasComponent);
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarNoticia(Number(id));
      this.idNoticiaRRSS(Number(id));
    }
  }

  idNoticiaRRSS(id: number){
    //armar url para compartir en redes sociales
    let urlRedes = `${environment.urlBase}/noticias/${id}`;
    this.idNoticia = urlRedes;
  }

  async cargarNoticia(id: number) {
    try {
      const dataDetalleNoticia = await this.apisService.getNoticiaById(id);

      const noticiaElement = dataDetalleNoticia.data;

      if (noticiaElement && noticiaElement.attributes) {  
        const { title, introtext, fulltext, publish_up, images, id } = noticiaElement.attributes;
        //Imagenes
        let imageUrls: string[] = [];
        if (images && images.data && images.data.length > 0) {
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
        //Fin de imagenes

        this.noticia = { 
          titulo: title,
          introtext: introtext,
          fulltext: fulltext,
          publish_up: publish_up,
          images: this.imageUrl,
          id: id
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

  onVerDetalle(id: number) {
   //se debe refresh la pagina para que se cargue la noticia
    if (id) {
      this.router.navigate(['/noticias', id]).then(() => window.location.reload());
    } else {
      console.error('ID de la noticia no válido en NoticiasDetallesComponent:', id);
    } 
  }
}
