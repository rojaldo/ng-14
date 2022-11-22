import { Component, OnInit } from '@angular/core';

enum State {
  init,
  firstFigure,
  secondFigure,
  result
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';
  currentState = State.init;
  firstFugure = 0;
  secondFigure = 0;
  operator = '';
  result = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleNumber(value: number) {
    switch (this.currentState) {
      case State.init:
        this.firstFugure = value;
        this.currentState = State.firstFigure;
        this.display = value.toString();
        break;
      case State.firstFigure:
        this.firstFugure = this.firstFugure * 10 + value;
        this.display += value.toString();
        break;
      case State.secondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        break;
      case State.result:
        this.initCalculator();
        this.firstFugure = value;
        this.currentState = State.firstFigure;
        this.display = value.toString();
        break;
      default:
        break;
    }
  }

  initCalculator() {
    this.display = '';
    this.currentState = State.init;
    this.firstFugure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
  }

  handleString(value: string) {
    switch (this.currentState) {
      case State.init:
        break;
      case State.firstFigure:
        if (this.isOperator(value)) {
          this.operator = value;
          this.currentState = State.secondFigure;
          this.display += value;
        }
        break;
      case State.secondFigure:
        if (value === '=') {
          this.result = this.calculate();
          this.currentState = State.result;
          this.display += value + this.result;
        }
        break;
      case State.result:
        if (this.isOperator(value)) {
          const temp = this.result;
          this.initCalculator();
          this.firstFugure = temp;
          this.operator = value;
          this.currentState = State.secondFigure;
          this.display = this.firstFugure.toString() + this.operator;
        }
        break;
      default:
        break;
    }
  }

  calculate() {
    switch (this.operator) {
      case '+':
        return this.firstFugure + this.secondFigure;
      case '-':
        return this.firstFugure - this.secondFigure;
      case '*':
        return this.firstFugure * this.secondFigure;
      case '/':
        return this.firstFugure / this.secondFigure;
      default:
        return 0;
    }
  }

  readonly isOperator = (value: string) =>
    value === '+' || value === '-' || value === '*' || value === '/';

  handleClick(value: number | string) {    
    if (typeof value === 'number') {
      this.handleNumber(value);
    } else if (typeof value === 'string') {
      if (value === 'C') {
        this.initCalculator();
      } else {
        this.handleString(value);
      }
    }
  }


}
