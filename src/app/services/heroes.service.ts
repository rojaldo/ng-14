import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Hero[] = [new Hero('Batman', 'Dark knight'), new Hero('Superman'), new Hero('Spiderman')];
  private _heroName = '';
  private _heroDescription = '';

  constructor() { }

  get heroes() {
    return this._heroes;
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
      this.heroes.push(new Hero(heroName, heroDescription));
    }
    console.error('Hero name is empty');
    
  }

  removeHero(index: number) {
    this.heroes.splice(index, 1);
  }
}
