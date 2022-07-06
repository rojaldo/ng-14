import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
    this.service.display$.subscribe(value => {
      this.display = value
    });
  }

  handleClick(value: any) {
    this.service.process(value);
  }

}
