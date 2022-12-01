import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrivialComponent } from 'src/app/components/trivial/trivial/trivial.component';

const routes: Routes = [{ path: '', component: TrivialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrivialRoutingModule { }
