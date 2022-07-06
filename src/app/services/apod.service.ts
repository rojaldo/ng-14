import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apod!: Apod;
  apod$ = new BehaviorSubject<any>(this._apod);

  readonly apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
  readonly key = 'DEMO_KEY';

  constructor(private http: HttpClient) { }

  getApod(strDate?: string) {

    let url = this.apodUrl + this.key;
    if (strDate) {
      url += '&date=' + strDate;
    }
    const observer = {
      next: (data: any) => {
        console.log(data);
        this._apod = new Apod(data);
        this.apod$.next(this._apod);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      }
    }

    this.http.get(url).subscribe(observer);
  }
}
