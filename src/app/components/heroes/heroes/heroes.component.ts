import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  heroName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.heroName.length > 0) {
      this.heroes.push(this.heroName);
      this.heroName = '';
    }
  }

}
