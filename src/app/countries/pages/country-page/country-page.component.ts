import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryAlphaCode(id))
      )
      .subscribe((coutry) => {
        if (!coutry) return this.router.navigateByUrl('');
        return (this.country = coutry);
        
      });
  }
}
