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
  score = 0;

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.cards$.subscribe(cards => {
      this.cards = cards;
    });
    this.service.score$.subscribe(score => {
      this.score = score;
    });
    this.service.getQuestions();
  }

  handleResponse(rightAnswered: boolean) {
    if(rightAnswered) {
      this.service.addScore(2);
    }else {
      this.service.addScore(-1);
    }
  }

}
