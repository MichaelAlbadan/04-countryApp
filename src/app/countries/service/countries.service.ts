import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interface/country';
import { catchError, map, Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) {
    
   }

   searchCountryAlphaCode(term : string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${term}`)
    .pipe(
      map( coutries => coutries.length >0 ? coutries[0]:null),
      catchError(error => of (null))
    )

   }

   searchCapital(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
      catchError(error => of ([]))
    );
   }

   searchCountry(term:string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`).pipe(
      catchError(error => of ([])))
   }

   searchRegion(term:string){
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`).pipe(
      catchError(error => of ([]))
    )
   }
}
