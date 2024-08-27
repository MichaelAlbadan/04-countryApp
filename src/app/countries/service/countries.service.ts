import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interface/country';
import { catchError, delay, map, Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) {
    
   }


   getCountriesRequest(url : string):Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError(error => of ([])),
    );
  }

   searchCountryAlphaCode(term : string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${term}`)
    .pipe(
      map( coutries => coutries.length >0 ? coutries[0]:null),
      catchError(error => of (null))
    )

   }

   searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url);
   }

   searchCountry(term:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
   }

   searchRegion(term:string){
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url);
   }
}
