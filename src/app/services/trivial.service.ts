import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  private _cards: Card[] = [];
  cards$: BehaviorSubject<Card[]> = new BehaviorSubject(this._cards);

  constructor(private http: HttpClient) { }

  get cards(): Card[] {
    return this._cards;
  }

  getTrivial() {
    if (this._cards.length === 0) {
      const observable = {
        next: (data: any) => {
          for (const jsonCard of data.results) {
            const card = new Card(jsonCard);
            this._cards.push(card);
          }
          this.cards$.next(this.cards)
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      }
      this.http.get('https://opentdb.com/api.php?amount=10').subscribe(observable);
    }
  }
}
