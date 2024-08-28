import { Component } from '@angular/core';
import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
public countries: Country[] = [];

constructor(private countriesServices: CountriesService){

}

searchByRegion(term:string){
  this.countriesServices.searchRegion(term).subscribe(
    countries => this.countries = countries
  )
}

}
