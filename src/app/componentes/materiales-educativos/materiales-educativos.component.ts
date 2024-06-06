import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../servicio/apis/apis.service';
import { CarruselMaterialesComponent } from '../carruseles/carrusel-materiales/carrusel-materiales.component';


@Component({
  selector: 'app-materiales-educativos',
  standalone: true,
  imports: [CarruselMaterialesComponent],
  templateUrl: './materiales-educativos.component.html',
  styleUrl: './materiales-educativos.component.css'
})
export class MaterialesEducativosComponent implements OnInit {
  
  materialesEducativos: any = [];

  constructor(private ApisService: ApisService) {}

  ngOnInit() {
    this.ApisService.getMaterialesEducativos().then((dataMaterialesEducativos) => {
      dataMaterialesEducativos.data.forEach((element: any) => {
        const titMaterialEducativo = element.attributes.Titulo;
        const LinkDescargar = element.attributes.botondescargarmaterial;
        const LinkLeerMaterialEducativo = element.attributes.botonvermas;
        this.materialesEducativos.push({titulo: titMaterialEducativo, descargar: LinkDescargar, leer: LinkLeerMaterialEducativo});
      });
      console.log("materialesEducativos", this.materialesEducativos);
    });
  }
}
