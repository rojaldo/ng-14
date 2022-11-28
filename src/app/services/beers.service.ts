import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  _beers: Beer[] = []; 
  beers$ = new BehaviorSubject<Beer[]>(this._beers);

  constructor(private http: HttpClient) { }

  getBeers() {
    const url = 'https://api.punkapi.com/v2/beers';
    const observer = {
      next: (data: any) => {
        this._beers = data.map((jsonBeer: any) => new Beer(jsonBeer));
        this.beers$.next(this.beers);
      },
      error: (err: any) => console.error(err),
      complete: () => console.log('complete')
    }
    this.http.get(url).subscribe(observer);
  }

  get beers() {
    return [...this._beers];
  }
}
