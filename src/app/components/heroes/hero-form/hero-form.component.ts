import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() onAddHero = new EventEmitter<Hero>();

  newHero = new Hero();

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.newHero.name.length > 0) {
      this.onAddHero.emit(this.newHero);
      this.newHero = new Hero();
    }
  }

}
