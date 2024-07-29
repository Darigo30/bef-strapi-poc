import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApisService } from '../../servicio/apis/apis.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
//import { Console } from 'console';

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
  @Output() emitirIdNoticia = new EventEmitter<number>();
  noticiasRelacionadas: any[] = [];
  imagenNoticia: string = '';
  urlNoticias: string = ''
  //idNoticiaRelacionada: number = 0;

  constructor(private apisService: ApisService, private router: Router) {}

  irANoticias() {
    this.urlNoticias = '/noticias';
    this.router.navigate([this.urlNoticias]);
  }

  ngOnInit(): void {
      this.cargarNoticiasRelacionadas(this.fechaPublicacion, this.idNoticia);
      console.log("no", this.idNoticia)
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
        //this.idNoticiaRelacionada = noticia.id;
        //console.log("id niticia", this.idNoticiaRelacionada);
        console.log("noticia", this.idNoticia);
        console.log("noticia", noticia.id, noticiaFecha, fecha);
        return noticia.id !== idNoticia && noticiaFecha >= fecha;
      }).slice(0,6)
    } catch (error) {
      console.error('Error al cargar noticias relacionadas:', error);
    }
  }
// Ver detalle interno 

  verDetalle(id: number) {
    if (id) {
      this.emitirIdNoticia.emit(id);
      console.log("id noticia", id);
      this.router.navigate(['/noticias', id]);
    } else {
      console.error('ID de la noticia no válido en CarruselNoticiasComponent:', id);
    }
  }
  
}
