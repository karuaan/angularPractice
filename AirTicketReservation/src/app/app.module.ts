import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlightsComponentComponent } from './flights-component/flights-component.component';
import { IdPipe } from './id.pipe';
import { FlightDetailsComponent } from './flight-details/flight-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponentComponent,
    IdPipe,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FlightsComponentComponent]
})
export class AppModule { }
