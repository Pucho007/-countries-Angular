import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi:string='https://restcountries.eu/rest/v2'

  constructor(private httpCliente: HttpClient) { }

  buscar(termino:string):Observable<PaisInterface[]>{
    const url=`${this.urlApi}/name/${termino}`
    return this.httpCliente.get<PaisInterface[]>(url);
  }

  buscarCapital(termino:string):Observable<PaisInterface[]>{
    const url=`${this.urlApi}/capital/${termino}`
    return this.httpCliente.get<PaisInterface[]>(url);
  }

  buscarById(termino:string):Observable<PaisInterface>{
    const url=`${this.urlApi}/alpha/${termino}`
    return this.httpCliente.get<PaisInterface>(url);
  }

  buscarByRegion(termino:string):Observable<PaisInterface[]>{
    const url=`${this.urlApi}/region/${termino}`
    return this.httpCliente.get<PaisInterface[]>(url);
  }

}
