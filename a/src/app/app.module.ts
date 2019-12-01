import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './comps/dirs/mypipe.pipe';
import { PipsPipe } from './comps/dirs/pips.pipe';
import { HighlightDirective } from './comps/dirs/highlight.directive';
import { PipsComponent } from './comps/dirs/pips/pips.component';
import { YearToAgeDirective } from './comps/dirs/year-to-age.directive';

@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    PipsPipe,
    HighlightDirective,
    PipsComponent,
    YearToAgeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
