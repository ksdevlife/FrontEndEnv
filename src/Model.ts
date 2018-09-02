'use strict';
export class Weather {
    id: number;
    location: string;
    temp: number;
    tempMin: number;
    tempMax: number;
    constructor() {
       this.id = 0;
       this.location = '';
       this.temp = 0; 
       this.tempMin = 0;
       this.tempMax = 0;
    }
}

export class WeatherModel {
    editedWeather: Weather;
    weathers: Weather[];
    nextId: number;
    constructor() {
       this.nextId = 1; 
       this.editedWeather = new Weather(); 
       this.weathers = [];
    }
}