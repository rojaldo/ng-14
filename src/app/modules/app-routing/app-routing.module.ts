import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from 'src/app/components/apod/apod/apod.component';
import { BeersComponent } from 'src/app/components/beers/beers/beers.component';
import { CalculatorComponent } from 'src/app/components/calculator/calculator/calculator.component';
import { CountriesComponent } from 'src/app/components/countries/countries.component';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { ReactiveComponent } from 'src/app/components/forms/reactive/reactive.component';
import { TemplateComponent } from 'src/app/components/forms/template/template.component';
import { HeroesComponent } from 'src/app/components/heroes/heroes/heroes.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { BeersGuard } from 'src/app/guards/beers.guard';

const routes: Routes = [
  { path: 'beers', component: BeersComponent, canActivate: [BeersGuard] },
  { path: 'templateform', component: TemplateComponent },
  { path: 'reactiveform', component: ReactiveComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'apod', loadChildren: () => import('../apod/apod.module').then(m => m.ApodModule) },
  { path: 'calculator', loadChildren: () => import('../calculator/calculator.module').then(m => m.CalculatorModule) },
  { path: 'heroes', loadChildren: () => import('../heroes/heroes.module').then(m => m.HeroesModule) },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
