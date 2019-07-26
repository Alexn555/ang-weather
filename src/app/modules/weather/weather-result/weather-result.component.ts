import {Component, OnInit, NgZone, Input, Output, EventEmitter} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import {WeatherService} from '../weather.service';
import {CurrentDay, Week} from '../weather.model';

import { getIconClassFromWeatherApi } from '@shared/helpers/icons';
import { capitalizeFirstLetter } from '@shared/helpers/string';
import { getWeekDay, getDateParts,
    getDateString, getTimeTitle, isToday } from '@shared/helpers/date';

import { MIN_SEACH_LENGTH, DAYS_AMOUNT,
  SEARCH_ERROR_CASES } from '../weather.config';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent implements OnInit {

  @Input() searchInputCity;
  @Input() searchInputCoords;
  @Output() searchBackApplied: EventEmitter<any> = new EventEmitter();

  public weatherResultError: boolean;
  public weatherResultSearchStarted: boolean;
  public weatherCurrentDay: CurrentDay;
  public weatherWeek: Array<Week>;
  public degreeSymbol = '°C';

  // settings
  public isSettingsOpen: boolean;
  public isMetric: boolean; // metric -> celcius, imperial -> farenheit

  public weatherResultErrorMessage: string;

  constructor(private zone: NgZone,
              private translate: TranslateService,
              private service: WeatherService,
              private cookieService: CookieService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.isSettingsOpen = true;
    this.isMetric = true;
  }

  ngOnInit(): void {
    this.getResult(false);
  }


  refreshComponent(captchaResponse: string) {
    this.zone.run(() => { });
  }

  getResult(hideLoadingBar: boolean) {
    this.weatherResultSearchStarted = !hideLoadingBar;
    this.resetResult();
    const searchInput = this.searchInputCity;
    const coords = this.searchInputCoords;
    const coordsExits = coords !== undefined;
    if (searchInput && searchInput.length >= MIN_SEACH_LENGTH || coordsExits) {

      this.service.getWeatherResult(searchInput, coords, this.isMetric, DAYS_AMOUNT).subscribe((data) => {
        if (data && data !== null) {
          this.showSuccess(data);
        } else {
          this.showError(SEARCH_ERROR_CASES.NothingFound);
        }
      }, error => {
        this.showError(SEARCH_ERROR_CASES.NothingFound);
      });

    } else {
       this.showError(SEARCH_ERROR_CASES.MinLength);
    }

  }

  private showError(condition: SEARCH_ERROR_CASES) {
    this.weatherResultSearchStarted = false;
    this.weatherResultError = true;
    switch (condition) {
      case SEARCH_ERROR_CASES.MinLength:
        this.weatherResultErrorMessage = this.translate.instant('weather.minChars');
        break;
      case SEARCH_ERROR_CASES.NothingFound:
      default:
        this.weatherResultErrorMessage = this.translate.instant('weather.commonError');
    }
  }

  private showSuccess(result) {
    this.weatherResultSearchStarted = false;
    const list = result.list;

    // save location (to restore on refresh)
    this.cookieService.set( 'location', result.city.name );

    if (list && list.length > 0) {
      const current = list[0];
      this.weatherCurrentDay = {
        location: result.city.name,
        fullDate: getDateString(current.dt),
        weekDay: getWeekDay(current.dt_txt),
        temp: this.roundTemp(current.main.temp),
        weather: capitalizeFirstLetter(current.weather[0].description),
        iconClass: getIconClassFromWeatherApi(current.weather[0].icon),
        details: this.getCurrentDayTimes(list)
      };
      this.weatherWeek = this.getAllWeekForecast(list);
    } else {
       console.error('Incorrect information from backend');
    }

  }

  private getCurrentDayTimes(list) {
    const currentDayTimes = [];
    for (const item of list) {
      const dateParts = getDateParts(item.dt_txt);
      if (isToday(dateParts.date) && getTimeTitle(dateParts.time) !== '') {
        const timeTitle = getTimeTitle(dateParts.time);
        currentDayTimes.push({ timeTitle: timeTitle, temp: this.roundTemp(item.main.temp) });
      }
    }
    return currentDayTimes;
  }

  private getAllWeekForecast(list) {
    const allWeekDays = [];
    for (const item of list) {
      const date = item.dt_txt;
      const dateParts = getDateParts(date);
      // add only one time (day - 12:00) per day
      if (!this.checkDuplicate(dateParts.date, allWeekDays) && getTimeTitle(dateParts.time) === 'Day') {
        allWeekDays.push({
          date: date,
          weekDay: getWeekDay(date),
          temp: this.roundTemp(item.main.temp),
          iconClass: getIconClassFromWeatherApi(item.weather[0].icon) });
      }
    }
    return allWeekDays;
  }

  private roundTemp(temp: number) {
    return Math.floor(temp);
  }

  private checkDuplicate(date: string, targetList) {
    if (targetList.length > 0) {
      for (const item of targetList) {
        if (item.date === date) {
          return true;
        }
      }
    }
    return false;
  }

  private resetResult() {
    this.weatherResultError = false;
  }

  onSettingsChanged(settingsData: any) {
    if (settingsData) {
      this.isMetric = settingsData.isMetric;
      this.setTemperatureUnits();
      // request again to get proper conversion
      this.getResult(true);
    }
  }

  setTemperatureUnits() {
    this.degreeSymbol = this.isMetric ? '°C' : '°F';
  }

  restartSearch() {
    this.cookieService.set( 'location', '' );
    this.resetResult();
    this.searchBackApplied.emit('back');
  }

}
