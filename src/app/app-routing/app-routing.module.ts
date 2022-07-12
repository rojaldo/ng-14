import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from '../components/apod/apod/apod.component';
import { BeersComponent } from '../components/beers/beers/beers.component';
import { CalculatorComponent } from '../components/calculator/calculator/calculator.component';
import { ErrorComponent } from '../components/error/error.component';
import { ReactiveFormComponent } from '../components/forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from '../components/forms/template-form/template-form.component';
import { HeroesComponent } from '../components/heroes/heroes/heroes.component';
import { LoginComponent } from '../components/login/login.component';
import { MyGuard } from '../guards/my-guard.guard';

const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent, canActivate: [MyGuard], },
    { path: 'apod', loadChildren: () => import('../apod-route/apod.module').then(m => m.ApodModule) },
    { path: 'beers', component: BeersComponent },
    { path: 'forms', component: ReactiveFormComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
