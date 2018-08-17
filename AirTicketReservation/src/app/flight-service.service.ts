import { Injectable } from '@angular/core';
import { flight } from '../app/flights-component/flight';
import { Http } from '@angular/http';

@Injectable()
export class FlightServiceService {

  flightsList: flight[];

  constructor(private http:Http) { }

  getAllFLights(): Promise<flight[]>
  {
    return this.http.get('http://localhost:4200/flightsAll')
    .toPromise()
    .then(response=>response.json() as flight[]);
  }

  private errorHandler(error:any):Promise<any> {
    console.error("Error occured",error);    
    return Promise.reject(error.message || error);
  }

}
