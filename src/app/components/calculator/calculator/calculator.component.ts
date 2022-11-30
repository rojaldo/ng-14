import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  providers: [CalculatorService]
})
export class CalculatorComponent implements OnInit, OnDestroy {

  @Input() index = 0;
  
  display = '';

  myId: string | null = null;

  constructor(
    private service: CalculatorService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.service.display$.subscribe(display => this.display = display);
    this.display = this.service.display;
    this.service.loadStorage(this.index);
    // recover get parameter id
    this.myId = this.route.snapshot.paramMap.get('id');
    console.log('CalculatorComponent.ngOnInit() myId = ' + this.myId);
  }

  ngOnDestroy(): void {
    console.log('CalculatorComponent.ngOnDestroy()');
    this.service.saveStorage(this.index);
  }

  handleButton() {
    this.router.navigate(['/heroes', { id: this.myId }]);
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
