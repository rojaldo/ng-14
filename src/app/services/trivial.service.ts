import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  private _cards: Card[] = [];
  cards$ = new BehaviorSubject<Card[]>(this.cards);

  constructor(private http: HttpClient) { }

  get cards(): Card[] {
    return [...this._cards];
  }

  getQuestions(questions?: number, category?: number, difficulty?: string, type?: string) {
    let url = 'https://opentdb.com/api.php?';
    if (questions) {
      url += `amount=${questions}`;
    }else {
      url += 'amount=10';
    }
    if (category) {
      url += `&category=${category}`;
    }
    if (difficulty) {
      url += `&difficulty=${difficulty}`;
    }
    if (type) {
      url += `&type=${type}`;
    }
    const observer = {
      next: (data: any) => {
        data.results.forEach((element: any) => {
          this._cards.push(new Card(element));
        });
        this.cards$.next(this.cards);
      },
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Complete'),
    }
    this.http.get(url).subscribe(observer);
  }
}
