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
    console.log(heroName, heroDescription);
    
    if (heroName !== '') {
      this._heroes = [...this.heroes, new Hero(heroName, heroDescription)];
      console.log('heroes: ' + JSON.stringify(this.heroes));
      
    }
    console.error('Hero name is empty');
    
  }

  removeHero(index: number) {
    this._heroes.splice(index, 1);
  }
}
