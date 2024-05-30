import { Component, Input } from '@angular/core';
import { PreguntasFrecuentesComponent } from '../preguntas-frecuentes/preguntas-frecuentes.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PreguntasFrecuentesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  {
  @Input() itemFooter: any = '' //TODO
}
