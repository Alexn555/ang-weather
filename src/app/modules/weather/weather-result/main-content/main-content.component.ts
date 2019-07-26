import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-weather-result-main',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class WeatherMainContentComponent implements OnInit {

  @Input() public content: boolean;
  @Input() public isMetric: boolean;
  @Input() public degreeSymbol: string;

  ngOnInit(): void {
  }

}
