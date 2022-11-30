import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ApodPickerComponent } from './components/apod/apod-picker/apod-picker.component';
import { ApodContentComponent } from './components/apod/apod-content/apod-content.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AbvPipe } from './pipes/abv.pipe';
import { FilteredBeersPipe } from './pipes/filtered-beers.pipe';
import { CalculatorService } from './services/calculator.service';
import { HeroesService } from './services/heroes.service';
import { ApodService } from './services/apod.service';
import { BeersService } from './services/beers.service';
import { TemplateComponent } from './components/forms/template/template.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent,
    ApodComponent,
    ApodPickerComponent,
    ApodContentComponent,
    BeersComponent,
    AbvPipe,
    FilteredBeersPipe,
    TemplateComponent,
    CountriesComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    NgxSliderModule,
    ReactiveFormsModule
  ],
  providers: [HeroesService, ApodService, BeersService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
