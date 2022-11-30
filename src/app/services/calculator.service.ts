import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

enum State {
  init,
  firstFigure,
  secondFigure,
  result
}

@Injectable()

export class CalculatorService {

  private _display = '';
  private _currentState = State.init;
  private _firstFugure = 0;
  private _secondFigure = 0;
  private _operator = '';
  private _result = 0;

  display$ = new BehaviorSubject<string>(this.display);

  constructor(private storage: StorageService) { }

  get display() {
    return this._display;
  }

  saveStorage(index: number) {
    this.storage.saveStorage({
      index,
      display: this._display,
      firstFigure: this._firstFugure,
      secondFigure: this._secondFigure,
      operator: this._operator,
      result: this._result,
      currentState: this._currentState
    });
  }

  loadStorage(index: number) {
    let myStorageArray = this.storage.store.filter((item) => item.index === index);
    if (myStorageArray.length > 0) {
      let storage = myStorageArray[0];
      console.log(storage);
      this._display = storage.display;
      this._firstFugure = storage.firstFigure;
      this._secondFigure = storage.secondFigure;
      this._operator = storage.operator;
      this._result = storage.result;
      this._currentState = storage.currentState;
      this.display$.next(this._display);
    }
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
    this.display$.next(this._display);
  }

  initCalculator() {
    this._display = '';
    this._currentState = State.init;
    this._firstFugure = 0;
    this._secondFigure = 0;
    this._operator = '';
    this._result = 0;
    this.display$.next(this._display);
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
    this.display$.next(this._display);
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
