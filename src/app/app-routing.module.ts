import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherSearchComponent} from '@weather/weather-search/weather-search.component';
import {AppErrorPageComponent} from '@common/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherSearchComponent,
  },
  {
    path: '**',
    component: AppErrorPageComponent,
    data: {
      number: '404'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
