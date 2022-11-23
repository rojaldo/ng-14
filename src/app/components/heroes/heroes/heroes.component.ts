import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [new Hero('Batman', 'Dark knight'), new Hero('Superman'), new Hero('Spiderman')];
  heroName = '';
  heroDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.heroName !== '') {
      this.heroes.push(new Hero(this.heroName, this.heroDescription));
      this.heroName = '';
      this.heroDescription = '';
    }
    console.error('Hero name is empty');
    
  }

}
