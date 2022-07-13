import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable()
export class HeroesService {

  private _heroes: Hero[] = [new Hero('Superman', 'Man of steel'), new Hero('Batman', 'Dark knight')];

  heroes$ = new BehaviorSubject<Hero[]>(this.cloneHeroes());

  constructor() {
  }

  addHero(hero: Hero) {
    if (hero !== null && hero !== undefined && hero instanceof Hero) {
      if (hero.name.length > 0) {
        this._heroes.push(hero);
      }
      this.heroes$.next(this.cloneHeroes());
    }
  }

  removeHero(index: number) {
    this._heroes.splice(index, 1);
    this.heroes$.next(this.cloneHeroes());
  }

  logHeroes() {
    console.log(this._heroes);
  }

  cloneHeroes() {
    let res: Hero[] = [];
    for (const hero of this._heroes) {
      res.push(hero.clone());
    }
    return res;
  }

}
