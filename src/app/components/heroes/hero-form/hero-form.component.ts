import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit, OnDestroy {

  heroName = '';
  heroDescription = '';

  constructor(private service: HeroesService) { }

  ngOnInit(): void {
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


}
