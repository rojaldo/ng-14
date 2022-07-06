import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  apod: any = {};
  apod$ = new BehaviorSubject<any>(this.apod);

  readonly apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
  readonly key = 'DEMO_KEY';

  constructor(private http: HttpClient) { }

  getApod() {

    const observer = {
      next: (data: any) => {
        console.log(data);
        this.apod = data;
        this.apod$.next(this.apod);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      }
    }

    this.http.get(this.apodUrl + this.key).subscribe(observer);
  }
}
