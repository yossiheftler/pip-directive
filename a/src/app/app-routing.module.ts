import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipsPipe } from './comps/dirs/pips.pipe';
import { HighlightDirective } from './comps/dirs/highlight.directive';
import { PipsComponent } from './comps/dirs/pips/pips.component';
import { YearToAgeDirective } from './comps/dirs/year-to-age.directive';


const routes: Routes = [
  { path: 'pipe', component:PipsComponent, },
  { path: '', redirectTo: '/pips', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
