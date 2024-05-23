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
    return[{name: "Recursos",},{name: "Actividades",},{name: "Noticias",},{name: "Mi cuenta",}]
  }
  
}
