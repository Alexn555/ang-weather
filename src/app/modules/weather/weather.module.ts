import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@common/common.module';

import { WeatherSearchComponent } from '@weather/weather-search/weather-search.component';
import { WeatherResultComponent } from '@weather/weather-result/weather-result.component';
import { WeatherMainContentComponent } from '@weather/weather-result/main-content/main-content.component';
import { WeatherFooterContentComponent } from '@weather/weather-result/footer-content/footer-content.component';

import { WeatherSettingsComponent } from './weather-result/settings/settings.component';
import { WeatherService } from '@weather/weather.service';

@NgModule({
  declarations: [
    WeatherSearchComponent,
    WeatherResultComponent,
    WeatherMainContentComponent,
    WeatherFooterContentComponent,
    WeatherSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    WeatherSearchComponent,
    WeatherResultComponent,
    WeatherMainContentComponent,
    WeatherFooterContentComponent,
    WeatherSettingsComponent
  ],
  providers: [WeatherService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class WeatherModule { }
