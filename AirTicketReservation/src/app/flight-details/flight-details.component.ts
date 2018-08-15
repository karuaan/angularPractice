import { Component, OnInit, Input } from '@angular/core';
import { flight } from '../flights-component/flight';

@Component({
  selector: 'flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  
  @Input()
  chosenFlight: flight;

  constructor() { }

  ngOnInit() {
  }

}
