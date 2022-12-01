import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivialRoutingModule } from './trivial-routing.module';
import { TrivialComponent } from 'src/app/components/trivial/trivial/trivial.component';


@NgModule({
  declarations: [
    TrivialComponent
  ],
  imports: [
    CommonModule,
    TrivialRoutingModule
  ]
})
export class TrivialModule { }
