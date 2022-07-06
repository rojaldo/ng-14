import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum State {
  INIT,
  FIRST_NUMBER,
  SECOND_NUMBER,
  RESULT
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private currentState = State.INIT;
  private firstNumber = 0;
  private secondNumber = 0;
  private result = 0;
  private operator = '';
  private display = '';

  display$ = new BehaviorSubject<string>(this.display);

  constructor() { }

  process(value: any) {
    if (typeof value === 'number') {
      this.handleNumber(value)
    } else if (typeof value === 'string') {
      this.handleSymbol(value)
    }
  }

  private handleNumber(value: number) {
    switch (this.currentState) {
      case State.INIT:
        this.firstNumber = value;
        this.currentState = State.FIRST_NUMBER;
        this.display = value.toString();
        this.display$.next(this.display)
        break;
      case State.FIRST_NUMBER:
        this.firstNumber = this.firstNumber * 10 + value;
        this.display += value.toString();
        this.display$.next(this.display)
        break;
      case State.SECOND_NUMBER:
        this.secondNumber = this.secondNumber * 10 + value;
        this.display += value.toString();
        this.display$.next(this.display)
        break;
      case State.RESULT:
        this.firstNumber = value;
        this.secondNumber = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = State.FIRST_NUMBER;
        this.display = value.toString();
        this.display$.next(this.display)
        break;
      default:
        break;
    }
  }

  private handleSymbol(value: string) {
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
            this.display$.next(this.display)
          }
          break;
        case State.SECOND_NUMBER:
          if (value === '=') {
            this.result = this.resolve();
            this.currentState = State.RESULT;
            this.display += value + this.result.toString();
            this.display$.next(this.display)
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
            this.display$.next(this.display)
          }
          break;
        default:
          break;
      }
    }
  }

  private clearCalculator(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
    this.operator = '';
    this.currentState = State.INIT;
    this.display = '';
    this.display$.next(this.display)
  }

  private resolve(): number {
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
