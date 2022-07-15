import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-trivial-card',
  templateUrl: './trivial-card.component.html',
  styleUrls: ['./trivial-card.component.scss']
})
export class TrivialCardComponent implements OnInit {

  @Input() cardInfo!: Card;

  btnClasses: string[] = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'];

  constructor() { }

  ngOnInit(): void {
    this.btnClasses = [];
    for (let myAnswer of this.cardInfo.answers) {
      let btnClass = this.getClass(myAnswer);
      this.btnClasses.push(btnClass);
    }
  }


  handleAnswer(answer: string, index: number) {
    this.cardInfo.response(answer, index);
    console.log('getClass()');
    this.btnClasses = [];
    for (let myAnswer of this.cardInfo.answers) {
      let btnClass = this.getClass(myAnswer);
      this.btnClasses.push(btnClass);
    }
  }

  getClass(answer: string) {
    
    if(this.cardInfo.answered) {
      if(answer === this.cardInfo.userResponse && !this.cardInfo.rightAnswered) {
        return 'btn btn-danger';
      }
      else if(answer === this.cardInfo.correctAnswer) {
        return 'btn btn-success';
      }
      return 'btn btn-secondary'
    }else {
      return 'btn btn-primary'
    }
  }

}
