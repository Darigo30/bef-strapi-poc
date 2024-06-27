import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor() { }

  //API Libros (Recursos)

  /**
   * La función `getLibros` realiza una solicitud asincrónica al endpoint API para recuperar una lista de
   * libros que utilizan un token de autorización.
   * @returns La función `getLibros` devuelve los datos obtenidos del endpoint API
   * `environment.apiLibros` después de realizar una solicitud GET con el token de autorización proporcionado. Los datos
   * recuperado de la API se almacena en la variable `dataStrapiLibros` y luego lo devuelve el
   * función
   */

  async getLibros() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const responseLibros = await axios.get(environment.apiLibros, conf);
    try {
      const dataStrapiLibros = responseLibros.data;
      return dataStrapiLibros;
    } catch (error) {
      console.log(error);
      return { items: [] }; 
    }
  }

  //API Preguntas Frecuentes

  /**
   * La función `getPreguntasFrecuentes` realiza una solicitud asincrónica al endpoint API para recuperar una lista de
   * preguntas frecuentes que utilizan un token de autorización.
   * @returns La función `getPreguntasFrecuentes` devuelve los datos obtenidos del endpoint API
   * `environment.apiPreguntasFrecuentes` después de realizar una solicitud GET con el token de autorización proporcionado. Los datos
   * recuperado de la API se almacena en la variable `dataStrapiPreguntasFrecuentes` y luego lo devuelve el
   * función
   */

  async getPreguntasFrecuentes() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const responsePreguntasFrecuentes = await axios.get(environment.apiPreguntasFrecuentes, conf);
    try {
      const dataStrapiPreguntasFrecuentes = responsePreguntasFrecuentes.data;
      return dataStrapiPreguntasFrecuentes;
    } catch (error) {
      console.log(error);
    }
  }

  //API Materiales Educativos
  
  async getMaterialesEducativos() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const responseMateriales = await axios.get(environment.apiMaterialesEducativos, conf);
    try {
      const dataMateriales = responseMateriales.data;
      return dataMateriales;
    } catch (error) {
      console.log(error);
    }
  }

}