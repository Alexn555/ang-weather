import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { NotifyService } from '@shared/services/notification.service';

import { SAVE_ENABLE, MIN_SEACH_LENGTH } from '../weather.config';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  public weatherSeachForm: FormGroup;
  public searchCity: string;
  public searchCoords = undefined;
  public isResultVisible: boolean;
  public self = this;
  private savedLocation = '';

  constructor(private fb: FormBuilder,
              private translate: TranslateService,
              private notfiyService: NotifyService,
              private cookieService: CookieService) {
    this.createSearchForm();
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.isResultVisible = false;
    this.savedLocation = this.cookieService.get('location');
    if (SAVE_ENABLE && this.savedLocation !== '') {
      this.weatherSeachForm.setValue({'city': this.savedLocation});
      this.searchWeather('city');
    }
  }

  createSearchForm(): void {
    this.weatherSeachForm = this.fb.group({
        city: ['', [Validators.required, Validators.minLength(MIN_SEACH_LENGTH)]],
      }
    );
    this.weatherSeachForm = new FormGroup(this.weatherSeachForm.controls, {
      updateOn: 'blur'
    });
  }

  searchWeather(type: string) {
     this.searchCity = this.weatherSeachForm.value.city;
     if (type !== 'geolocation' && this.searchCity.length < MIN_SEACH_LENGTH) {
       this.notfiyService.error('Error', 'Please type some city or press my current position');
       return console.error('Please input city');
     }
     this.isResultVisible = true;
  }

  getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getPosition(position);
      }, this.errorGeoLocation);
    } else {
      this.notfiyService.warning('Error', 'Geo location off');
    }
  }

  getPosition(position) {
     this.searchCoords = { lat: position.coords.latitude, lon: position.coords.longitude };
     this.searchWeather('geolocation');
  }

  errorGeoLocation(err) {
    this.notfiyService.error('Geo error', `Geo error (${err.code}): ${err.message}`);
  }

  onRestartSearch(event) {
    this.isResultVisible = false;
    this.searchCoords = undefined;
  }

}
