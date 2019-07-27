# Weather checker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

 <img src="/weather.jpg" width="600" height="400" alt="Weather"/>

```
## Installation and usage

 1. Copy project folder to some projects location
 2. Use command line and nodejs, install node modules, cmd ->  cd project-location,  npm install 
 3. Once installed to start application use cmd -> npm run start 
 4. Type localhost:4200 in browser 
 5. Type City and press search, you should see correct result (or error if not typed or result not found)
 
 
 Main structure 
 
   src / 
     app / 
      modules /
           common / - common components
      		    loading-bar / -> bar that showing loading icon
      		    error-page / -> shows message if page not found
      		  themes / - common, specific theme scss components that are common for application
      		  weather /  ->  component that uses Angular classical structure and searches for City Weather
          		  .component, html, scss, service 
          	weather-search / - search logic and template
          	weather-result / - result logic and template
          	  settings / -> settings component of weather
          	  main-content / -> template shows current day info
          	  footer-content / -> template shows all week info   
             weather.service -> gets the info from server api
             
	    shared / - shared utilities, helpers
		  
      app.ts -> main application, starting point of application
	   	   
	  Typical Angular application written in Typescript. 
    SCSS is used here instead of plain css.
    Search and weather icons are from mdi material design icons.
    
    Some features: 
     Save: Currently if reload page and before that was successful response then system
       will save location and on reload it will set to saved location.
     Conversion to Celcius / Farenheit: Currently system uses online conversion, that is,
       requests info again with different temperature measurement type: metric, imperial.
       Author thinks this approach a bit precise than using offline manual conversion.
     Only 5 days forecast: Due to free version.
     Footer week forecast: day's temperature is for time: 12:00 that is day
     
    	  
   If any suggestions do not hesitate and tell.
  
   v 1.0.0
    Version stable and ready to work
   
 
   ```
   


