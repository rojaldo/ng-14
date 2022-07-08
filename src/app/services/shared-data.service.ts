import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _max = 56;
  max$ = new BehaviorSubject<number>(this._max);

  constructor() { }

  get max(): number {
    return this._max;
  }

  set max(value: number) {
    console.log('set max: ' + value);
    this._max = value;
    this.max$.next(this._max);
  }

}
