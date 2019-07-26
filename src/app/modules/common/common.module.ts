import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';

import { LoadingComponent } from './loading-bar/loading.component';
import { AppErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    LoadingComponent,
    AppErrorPageComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    TranslateModule
  ],
  exports: [
    LoadingComponent,
    AppErrorPageComponent
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonModule { }
