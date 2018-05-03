import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizService } from './quiz.service';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component'

const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'quiz', component: HomeComponent },
  { path: '', component: HomeComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes//,
      //{ enableTracing: true } // <-- debugging purposes only
    )


  ],
  providers: [
    QuizService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
