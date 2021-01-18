import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysComponent } from './analys.component';

const routes: Routes = [
  { 'path' : '', 'component' : AnalysComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysRoutingModule { }
