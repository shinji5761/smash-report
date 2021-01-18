import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterplanComponent } from './counterplan.component';

const routes: Routes = [
  { 'path' : '', 'component' : CounterplanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterplanRoutingModule { }
