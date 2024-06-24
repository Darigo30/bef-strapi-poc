import { Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { BusquedaresultComponent } from './vistas/busquedaresult/busquedaresult.component';

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
    }
];
