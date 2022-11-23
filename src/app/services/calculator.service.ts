import { Injectable } from '@angular/core';

enum State {
  init,
  firstFigure,
  secondFigure,
  result
}

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

  private _display = '';
  private _currentState = State.init;
  private _firstFugure = 0;
  private _secondFigure = 0;
  private _operator = '';
  private _result = 0;

  constructor() { }

  get display() {
    return this._display;
  }

  handleNumber(value: number) {
    switch (this._currentState) {
      case State.init:
        this._firstFugure = value;
        this._currentState = State.firstFigure;
        this._display = value.toString();
        break;
      case State.firstFigure:
        this._firstFugure = this._firstFugure * 10 + value;
        this._display += value.toString();
        break;
      case State.secondFigure:
        this._secondFigure = this._secondFigure * 10 + value;
        this._display += value.toString();
        break;
      case State.result:
        this.initCalculator();
        this._firstFugure = value;
        this._currentState = State.firstFigure;
        this._display = value.toString();
        break;
      default:
        break;
    }
    return this._display;
  }

  initCalculator() {
    this._display = '';
    this._currentState = State.init;
    this._firstFugure = 0;
    this._secondFigure = 0;
    this._operator = '';
    this._result = 0;
    return this._display;
  }

  handleString(value: string) {
    switch (this._currentState) {
      case State.init:
        break;
      case State.firstFigure:
        if (this._isOperator(value)) {
          this._operator = value;
          this._currentState = State.secondFigure;
          this._display += value;
        }
        break;
      case State.secondFigure:
        if (value === '=') {
          this._result = this._calculate();
          this._currentState = State.result;
          this._display += value + this._result;
        }
        break;
      case State.result:
        if (this._isOperator(value)) {
          const temp = this._result;
          this.initCalculator();
          this._firstFugure = temp;
          this._operator = value;
          this._currentState = State.secondFigure;
          this._display = this._firstFugure.toString() + this._operator;
        }
        break;
      default:
        break;
    }
    return this._display;
  }

  private _calculate() {
    switch (this._operator) {
      case '+':
        return this._firstFugure + this._secondFigure;
      case '-':
        return this._firstFugure - this._secondFigure;
      case '*':
        return this._firstFugure * this._secondFigure;
      case '/':
        return this._firstFugure / this._secondFigure;
      default:
        return 0;
    }
  }

  private readonly _isOperator = (value: string) =>
    value === '+' || value === '-' || value === '*' || value === '/';

}
