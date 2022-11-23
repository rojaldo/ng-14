import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];
  heroName = '';
  heroDescription = '';

  constructor(private service: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.service.heroes;
    this.heroName = this.service.heroName;
    this.heroDescription = this.service.heroDescription;
  }

  ngOnDestroy(): void {
    this.service.heroName = this.heroName;
    this.service.heroDescription = this.heroDescription;
  }

  addHero() {
    if (this.heroName !== '') {
      this.service.addHero(this.heroName, this.heroDescription);
      this.heroName = '';
      this.heroDescription = '';
    }
    console.error('Hero name is empty');
    
  }

  removeHero(index: number) {
    this.service.removeHero(index);
  }

}
