import { Component, OnInit } from '@angular/core';

enum State {
  INIT,
  FIRST_NUMBER,
  SECOND_NUMBER,
  RESULT
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  currentState = State.INIT;
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: any) {
    if (typeof value === 'number') {
      this.handleNumber(value)
    } else if (typeof value === 'string') {
      this.handleSymbol(value)
    }
  }

  handleNumber(value: number) {
    switch (this.currentState) {
      case State.INIT:
        this.firstNumber = value;
        this.currentState = State.FIRST_NUMBER;
        this.display = value.toString();
        break;
      case State.FIRST_NUMBER:
        this.firstNumber = this.firstNumber * 10 + value;
        this.display += value.toString();
        break;
      case State.SECOND_NUMBER:
        this.secondNumber = this.secondNumber * 10 + value;
        this.display += value.toString();
        break;
      case State.RESULT:
        this.firstNumber = value;
        this.secondNumber = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = State.FIRST_NUMBER;
        this.display = value.toString();
        break;
      default:
        break;
    }
  }

  handleSymbol(value: string) {
    if (value === 'del') {
      this.clearCalculator();
    }
    else {
      switch (this.currentState) {
        case State.INIT:
          break;
        case State.FIRST_NUMBER:
          if (value === '+' || value === '-' || value === '*' || value === '/') {
            this.operator = value;
            this.currentState = State.SECOND_NUMBER;
            this.display += value;
          }
          break;
        case State.SECOND_NUMBER:
          if (value === '=') {
            this.result = this.resolve();
            this.currentState = State.RESULT;
            this.display += value + this.result.toString();
          }
          break;
        case State.RESULT:
          if (value === '+' || value === '-' || value === '*' || value === '/') {
            this.firstNumber = this.result;
            this.operator = value;
            this.secondNumber = 0;
            this.result = 0;
            this.currentState = State.SECOND_NUMBER;
            this.display = this.firstNumber.toString() + this.operator;
          }
          break;
        default:
          break;
      }
    }
  }

  clearCalculator(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
    this.operator = '';
    this.currentState = State.INIT;
    this.display = '';
  }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstNumber + this.secondNumber;
      case '-':
        return this.firstNumber - this.secondNumber;
      case '*':
        return this.firstNumber * this.secondNumber;
      case '/':
        return this.firstNumber / this.secondNumber;
      default:
        return 0;
    }
  }


}
