import { Component } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

public countries: Country[] =[];

  constructor(private countriesService: CountriesService){

  }

  searchByPais(term:string){
    this.countriesService.searchCountry(term).subscribe(countries=>{
      this.countries = countries;
    });
   
  }

}
