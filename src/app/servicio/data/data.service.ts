import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  /**
   * La función getItemsHeader devuelve un array de objetos
   * con nombres que representan diferentes categorías.
   * @returns Se devuelve un array de objetos. Cada objeto tiene una propiedad llamada "name".
   */
  getItemsHeader(): any[]  {
    return[{name: "Recursos", ico: "troubleshoot", url: "/busqueda"},{name: "Actividades", ico: "calendar_month"},{name: "Red BEF", ico: "diversity_1"},{name: "Quienes Somos", ico:"fingerprint"},{name: "Ayuda", ico: "help_outline"}]
  }
}
