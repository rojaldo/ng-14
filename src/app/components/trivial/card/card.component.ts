import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Output() onRightAnswered = new EventEmitter<boolean>();


  classes: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.classes = this.card.answers.map((answer) => this.getClass(answer));
  }

  handleClick(answer: string) {
    this.card.answered = true;
    this.card.userAnswer = answer;
    this.card.rightAnswered = this.card.correctAnswer === answer;
    this.onRightAnswered.emit(this.card.rightAnswered);
    for (let i = 0; i < this.classes.length; i++) {
      this.classes[i] = this.getClass(this.card.answers[i]);
    }
  }

  getClass(answer: string) {
    console.log('getClass');
    
    if (this.card.answered) {
      if(answer === this.card.correctAnswer) {
        return 'btn btn-success';
      }else if (answer === this.card.userAnswer) {
        return 'btn btn-danger';
      }else {
        return 'btn btn-secondary';
      }
    }
    return 'btn btn-primary';
  }

}
