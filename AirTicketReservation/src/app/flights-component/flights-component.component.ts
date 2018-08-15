import { Component, OnInit } from '@angular/core';
import { flight } from './flight';
import { mockFlights } from './mock-flights';

@Component({
  selector: 'app-flights-component',
  templateUrl: './flights-component.component.html',
  styleUrls: ['./flights-component.component.css']
})
export class FlightsComponentComponent implements OnInit {

  show:boolean = false;
  flightData: flight[] = mockFlights;
  displayFlight: flight;
  selectedRow: number;
  color: number = 1;

  constructor() { }

  showFlight(Flight: flight, index: number)
  {
    this.show = this.show ? false : true;
    this.displayFlight = Flight;
    this.selectedRow = index;
  }

  ngOnInit() {
  }

}
