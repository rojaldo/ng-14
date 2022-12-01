import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivialRoutingModule } from './trivial-routing.module';
import { TrivialComponent } from 'src/app/components/trivial/trivial/trivial.component';
import { CardComponent } from 'src/app/components/trivial/card/card.component';


@NgModule({
  declarations: [
    TrivialComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TrivialRoutingModule
  ]
})
export class TrivialModule { }
