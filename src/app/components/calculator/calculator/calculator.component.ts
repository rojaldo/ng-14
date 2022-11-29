import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  providers: [CalculatorService]
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
    this.service.display$.subscribe(display => this.display = display);
    console.log('CalculatorComponent.ngOnInit()');
    this.display = this.service.display;
  }

  ngOnDestroy(): void {
    console.log('CalculatorComponent.ngOnDestroy()');
  }


  handleClick(value: number | string) {    
    if (typeof value === 'number') {
      this.service.handleNumber(value);
    } else if (typeof value === 'string') {
      if (value === 'C') {
        this.service.initCalculator();
      } else {
        this.service.handleString(value);
      }
    }
  }


}
