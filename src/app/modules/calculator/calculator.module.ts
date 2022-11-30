import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from 'src/app/components/calculator/calculator/calculator.component';
import { DisplayComponent } from 'src/app/components/calculator/display/display.component';
import { KeyboardComponent } from 'src/app/components/calculator/keyboard/keyboard.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
