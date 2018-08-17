import { Component, OnInit } from '@angular/core';
import { flight } from './flight';
import { mockFlights } from './mock-flights';
import { FlightServiceService } from '../flight-service.service';

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

  constructor(private flightService:FlightServiceService) { }

  showFlight(Flight: flight, index: number)
  {
    this.show = this.show ? false : true;
    this.displayFlight = Flight;
    this.selectedRow = index;
  }

  ngOnInit() {
    this.flightService.getAllFLights().then(response => this.flightData = response);
  }

}
