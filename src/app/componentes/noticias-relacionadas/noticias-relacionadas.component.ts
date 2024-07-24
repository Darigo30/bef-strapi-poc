import { Component, OnInit, Input } from '@angular/core';
import { ApisService } from '../../servicio/apis/apis.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-noticias-relacionadas',
  standalone: true,
  imports: [],
  templateUrl: './noticias-relacionadas.component.html',
  styleUrl: './noticias-relacionadas.component.css'
})
export class NoticiasRelacionadasComponent implements OnInit {

  @Input() fechaPublicacion: string = '';
  @Input() idNoticia: number = 0;
  noticiasRelacionadas: any[] = [];
  imagenNoticia: string = '';
  urlNoticias: string = ''

  constructor(private apisService: ApisService, private router: Router) {}

  irANoticias() {
    this.urlNoticias = '/noticias';
    this.router.navigate([this.urlNoticias]);
  }

  ngOnInit(): void {
      this.cargarNoticiasRelacionadas(this.fechaPublicacion, this.idNoticia);
  }

  async cargarNoticiasRelacionadas(fechaPublicacion: string, idNoticia: number) {
    try {
      const allNoticias = await this.apisService.getNoticias();
      const fecha = new Date(fechaPublicacion);
      this.noticiasRelacionadas = allNoticias.data.filter((noticia: any) => {
        const noticiaFecha = new Date(noticia.attributes.publish_up);
        let imageUrls: string[] = [];
        noticia.attributes.images.data.forEach((element: any) => {
          const imagencitaOne = `${environment.urlBase}${element.attributes.url}`;
          imageUrls.push(imagencitaOne);
        });
        noticia.imagenNoticia = imageUrls.length > 0 ? imageUrls[0] : '';
        return noticia.id !== idNoticia && noticiaFecha >= fecha;
      }).slice(0,6)
    } catch (error) {
      console.error('Error al cargar noticias relacionadas:', error);
    }
  }

  verDetalle(id: number, event: Event) {
    event.preventDefault(); 
    this.router.navigate(['/noticias', id]);
    console.log('Ver detalle de noticia:', id);
  }
}
