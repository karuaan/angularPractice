export class flight
{
    public flightId: string;
    public scheduleId: string;
    public source: string;
    public destination: string;
    public departureDate: Date;
    public arrivalDate: Date;
    public baseFare: number;
    public seatsAvailable: number;
    public message: string;

    constructor(flightId, scheduleId, source, destination, departureDate, arrivalDate, baseFare, seatsAvailable, message)
    {
        this.flightId = flightId;
        this.scheduleId = scheduleId;
        this.source = source;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.baseFare = baseFare;
        this.seatsAvailable = seatsAvailable;
        this.message = message;
    }
}