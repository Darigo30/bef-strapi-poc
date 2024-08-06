import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApisService {
 
  constructor() { }

  //API Libros (Recursos)

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

  //Api Noticias Bef

  async getNoticias() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const responseNoticias = await axios.get(environment.apiNoticias, conf);
    try {
      const dataNoticias = responseNoticias.data;
      return dataNoticias;
    } catch (error) {
      console.log(error);
    }
  }

  //Noticias by ID

  async getNoticiaById(id: number) {
    const conf = {
      headers: {
        Authorization: `Bearer ${environment.apiToken}`,
      }
    };

    try {
      const url = `${environment.apiNoticiaById}/${id}?populate=*`;
      const response = await axios.get(url, conf);
      return response.data;
    } catch (error) {
      console.error('Error fetching noticia:', error);
      throw error;
    }
  }

  //Api Reseñas de Libros

  async getResenasLibros() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const responseResenasLibros = await axios.get(environment.apiResenasLibros, conf);
    try {
      const dataResenasLibros = responseResenasLibros.data;
      return dataResenasLibros;
    } catch (error) {
      console.log(error);
    }
  }
}