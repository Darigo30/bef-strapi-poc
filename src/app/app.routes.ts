import { Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { BusquedaresultComponent } from './vistas/busquedaresult/busquedaresult.component';
import { NoticiasComponent } from './vistas/noticias/noticias.component';
import { NoticiasDetallesComponent } from './vistas/noticias-detalles/noticias-detalles.component';

export const routes: Routes = [
    {
        path: '',
        title: 'BEF Digital',
        component: HomeComponent
    },
    {
        path: 'busqueda',
        title: 'Recursos',
        component: BusquedaresultComponent
    },
    {
        path: 'noticias',
        title: 'Noticias',
        component: NoticiasComponent
    },
    {
        path: 'noticias/:id',
        title: 'Detalle Noticia',
        component: NoticiasDetallesComponent
    }
];
