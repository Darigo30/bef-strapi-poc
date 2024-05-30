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
    return[{name: "Recursos", ico: "troubleshoot"},{name: "Actividades", ico: "calendar_month"},{name: "Ayuda", ico: "help_outline"}]
  }

  getItemsFooter() { //TODO 
    // let titulo: "Biblioteca Escolar Futuro";
    // let direccion: "Calle 123, Ciudad Futura";

  }
  
}
