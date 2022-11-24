import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _data: any = {};
  data$ = new BehaviorSubject<any>(this.data);

  constructor(private http: HttpClient) { }

  get data() {
    return {...this._data};
  }

  getApod(date?: string) {
    const apiKey = 'DEMO_KEY';
    let url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;
    if (date) {
      url += `&date=${date}`;
    }
    const oberser = {
      next: (data: any) => { 
        this._data = data; 
        this.data$.next(this.data); 
      },
      error: (err: any) => console.error(err),
      complete: () => console.log('complete')
    }
    this.http.get(url).subscribe(oberser);
    
  }
}
