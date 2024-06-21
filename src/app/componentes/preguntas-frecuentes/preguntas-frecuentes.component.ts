import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../servicio/apis/apis.service';

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.css'
})
export class PreguntasFrecuentesComponent implements OnInit{
  preguntasFrecuentes: any = [];

  constructor(private ApisService: ApisService) {}
  
  ngOnInit() {
    this.ApisService.getPreguntasFrecuentes().then((dataPreguntasFrecuentes) => {
      dataPreguntasFrecuentes.data.forEach((element: any) => {
        const pregunta = element.attributes.Titulo;
        const respuesta = element.attributes.Respuesta;
        this.preguntasFrecuentes.push({pregunta: pregunta, respuesta: respuesta});
      });
    });
  }
}
