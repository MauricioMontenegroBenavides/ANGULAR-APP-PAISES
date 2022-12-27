import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchPaisResponse } from '../Interfaces/Pais.interfaces';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesPaisService {

  private apiUrl='https://restcountries.com/v3.1'

  constructor(private httpPais:HttpClient) { }

  buscarPais(termino:string):Observable<SearchPaisResponse[]>{
    const url=`${this.apiUrl}/name/${termino}`
    return this.httpPais.get<SearchPaisResponse[]>(url)// El get puede devolver cualquier cosa
    /* .pipe(
      catchError (err=>of([]))// EL catchError es una funcion comun y corriente que regresa un observable
    ) */// El of es uan funcion que genera observables
    // Hay dos formas de manejar los errores una del lado donde se consume y otra donde se hace la peticion
    // La ventaja de manejar los errores del lado de donde se consume es que se puede manipular la respuesta, como por ejemplo devolver un string
    // Y para el componente que lo consume seria literalmente el mismo codigo
  }

  buscarCapital(termino:string):Observable<SearchPaisResponse[]>{

    const url=`${this.apiUrl}/capital/${termino}`
    return this.httpPais.get<SearchPaisResponse[]>(url)
  }

  getPaisCodigo(id:string):Observable<SearchPaisResponse>{// Voy a retornar solo un pais
    console.log('id-',id)
    const url=`${this.apiUrl}/alpha/${id}`
    return this.httpPais.get<SearchPaisResponse>(url)
  }


   getRegion(region:string):Observable<SearchPaisResponse>{// Voy a retornar solo un pais

    const url=`${this.apiUrl}/region/${region}`
    return this.httpPais.get<SearchPaisResponse>(url)
  }

}
