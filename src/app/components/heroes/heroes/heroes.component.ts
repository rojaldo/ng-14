import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [new Hero('Superman', 'Man of steel'), new Hero('Batman', 'Dark knight')];

  newHero = new Hero();

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.newHero.name.length > 0) {
      this.heroes.push(new Hero(this.newHero.name, this.newHero.description));
      this.newHero = new Hero();
    }
  }

}
