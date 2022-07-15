import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { CalculatorService } from './services/calculator.service';
import { HeroesService } from './services/heroes.service';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { BeersComponent } from './components/beers/beers/beers.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BeersListComponent } from './components/beers/beers-list/beers-list.component';
import { BeersSelectorComponent } from './components/beers/beers-selector/beers-selector.component';
import { BeersPipe } from './pipes/beers.pipe';
import { AbvPipe } from './pipes/abv.pipe';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { TrivialComponent } from './components/trivial/trivial/trivial.component';
import { TrivialCardComponent } from './components/trivial/trivial-card/trivial-card.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroFormComponent,
    BeersComponent,
    BeersListComponent,
    BeersSelectorComponent,
    BeersPipe,
    AbvPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    ErrorComponent,
    LoginComponent,
    TrivialComponent,
    TrivialCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    NgxSliderModule,
    AppRoutingModule
  ],
  providers: [CalculatorService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
