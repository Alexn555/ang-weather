import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherService {
  weatherUrl: string;
  apiKey = '4d4b455f864fe9774e95b755b2fe1ac7';

  constructor(private http: HttpClient) {
    this.weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  }

  getWeatherResult(city: string, coords: any, isMetric: boolean, daysAmount: number): Observable<any> {
    const unit = isMetric ? 'metric' : 'imperial';
    let requestStr = `q=${city}`;
    if (coords !== undefined) {
      requestStr = `lat=${coords.lat}&lon=${coords.lon}`;
    }

    return this.http.get<any>(`${this.weatherUrl}?${requestStr}&mode=json&units=${unit}&cnt=${daysAmount}&APPID=${this.apiKey}`);
  }

}

