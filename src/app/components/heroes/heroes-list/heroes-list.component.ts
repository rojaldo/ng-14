import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {


  @Input() heroesList: Hero[] = [];

  @Output() onRemoveHero = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(index: number) {
    this.onRemoveHero.emit(index);
  }

}
