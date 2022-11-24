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

  getApod() {
    const oberser = {
      next: (data: any) => { 
        this._data = data; 
        this.data$.next(this.data); 
      },
      error: (err: any) => console.error(err),
      complete: () => console.log('complete')
    }
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(oberser);
    
  }
}
