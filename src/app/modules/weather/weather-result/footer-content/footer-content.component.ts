import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-weather-result-footer',
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss']
})
export class WeatherFooterContentComponent implements OnInit {

  @Input() public content: boolean;
  @Input() public isMetric: boolean;
  @Input() public degreeSymbol: string;

  ngOnInit(): void {
  }

}
