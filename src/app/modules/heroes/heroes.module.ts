import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from 'src/app/components/heroes/heroes/heroes.component';
import { HeroFormComponent } from 'src/app/components/heroes/hero-form/hero-form.component';
import { HeroesListComponent } from 'src/app/components/heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
