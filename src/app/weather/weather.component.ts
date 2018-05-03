import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


forWeather: any
weatherView = false;
message: any
sunrise: any
sunset: any




  constructor(private weather : WeatherService) { }

  ngOnInit() {

  }

getWeather(city){

  this.weather.getWeatherFor (city).subscribe ((data)=> {

    if (data) {
      this.weatherView = true
      this.forWeather = data

      this.sunrise = new Date (this.forWeather.sys.sunrise*1000)
      this.sunset = new Date (this.forWeather.sys.sunset*1000)
      this.message = 'City found'

    }


  },
(error) => {
  if (error) {
  this.message = `Cant find city like ${city}`

}
}
)

}

}
