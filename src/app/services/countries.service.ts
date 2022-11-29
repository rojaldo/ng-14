import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: string[] = [];
  countries$ = new BehaviorSubject<string[]>(this.countries);

  constructor(private http: HttpClient) { }

  getCountries() {
    const url = 'https://restcountries.com/v3.1/all';
    const observer = {
      next: (data: any) => {
        this.countries = data.map((jsonCountry: any) => jsonCountry.translations.spa.common);
        this.countries$.next(this.countries);
      },
      error: (err: any) => console.error(err),
      complete: () => console.log('complete')
    }
    this.http.get(url).subscribe(observer);
  }
}
