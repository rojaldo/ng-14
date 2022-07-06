import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [new Hero('Superman', 'Man of steel'), new Hero('Batman', 'Dark knight')];

  constructor() { }

  ngOnInit(): void {
  }

  addHero(hero: Hero) {
    if (hero.name.length > 0) {
      this.heroes.push(hero);
    }
  }

}
