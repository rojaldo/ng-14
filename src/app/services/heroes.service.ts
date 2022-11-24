import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Hero[] = [new Hero('Batman', 'Dark knight'), new Hero('Superman'), new Hero('Spiderman')];
  heroes$ = new BehaviorSubject<Hero[]>(this.heroes);
  private _heroName = '';
  private _heroDescription = '';

  constructor() { }

  get heroes() {
    // return a copy of the array
    return [...this._heroes];
  }

  get heroName() {
    return this._heroName;
  }

  set heroName(value: string) {
    this._heroName = value;
  }

  get heroDescription() {
    return this._heroDescription;
  }

  set heroDescription(value: string) {
    this._heroDescription = value;
  }

  addHero(heroName = '', heroDescription = '') {
    if (heroName !== '') {
      this._heroes = [...this.heroes, new Hero(heroName, heroDescription)];
      this.heroes$.next(this.heroes);      
    }
    console.error('Hero name is empty');
    
  }

  removeHero(index: number) {
    this._heroes.splice(index, 1);
    this.heroes$.next(this.heroes);
  }
}
