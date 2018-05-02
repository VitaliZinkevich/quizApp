import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WeatherService {

url = 'http://api.openweathermap.org/data/2.5/weather?q='
// {city name}
key = '&APPID=2ec5f0dd3f689471fc3d05b2a78732dc'


  constructor(private http: HttpClient ) { }

getWeatherFor(city){

let newUrl = this.url+city+'&units=metric'+this.key
return  this.http.get (newUrl)

}

}
