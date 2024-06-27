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
    this.cargarMaterialesEducativos();
  }

  async cargarMaterialesEducativos() {
    try {
      const getDataMaterialesEducativos = await this.ApisService.getMaterialesEducativos();
      this.materialesEducativos = MaterialesEducativosComponent.extraerMaterialesEducativos(getDataMaterialesEducativos);
      console.log('Materiales Educativos:', this.materialesEducativos);
    } catch (error) {
      console.error('Error al cargar la data de materiales educativos:', error);
    }
  }

  static extraerMaterialesEducativos(dataMaterialesEducativos: any): any {
    const materialProcesado: any[] = [];
    dataMaterialesEducativos.data.forEach((material: any) => {
      const titMaterialEducativo = material.attributes.Titulo;
      const LinkDescargar = material.attributes.botondescargarmaterial;
      const LinkLeerMaterialEducativo = material.attributes.botonvermas;
      materialProcesado.push({titulo: titMaterialEducativo, descargar: LinkDescargar, leer: LinkLeerMaterialEducativo});
    });
    return materialProcesado;
  } 
}
