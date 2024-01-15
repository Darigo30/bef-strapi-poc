import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor() { }

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
    }
  }

}
