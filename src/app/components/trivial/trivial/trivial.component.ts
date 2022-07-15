import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  cards: Card[] = [];
  points = 0;

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.cards$.subscribe(cards => {
      this.cards = cards;
    });
    this.service.getTrivial();
    this.points = this.service.points;
  }

  handleAnswer(rightAnswered: boolean) {
    if(rightAnswered) {
      this.points += 2;
    }else {
      this.points--;
    }
    this.service.points = this.points;
  }

}
