import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-weather-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class WeatherSettingsComponent implements OnInit {

  @Input() public isVisible: boolean;
  @Output() settingsApplied: EventEmitter<any> = new EventEmitter();
  public weatherSettingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createSettingsForm();
  }

  createSettingsForm(): void {
    this.weatherSettingsForm = this.fb.group({
        isMetric: [true, [Validators.required]], // celcius, farenheit
      }
    );
    this.weatherSettingsForm = new FormGroup(this.weatherSettingsForm.controls, {
      updateOn: 'blur'
    });
  }

  sendSettingsUpdate(field: string, isChecked: boolean) {
    switch (field) {
      case 'is-metric':
      default:
        this.weatherSettingsForm.controls.isMetric.setValue(isChecked);
        break;
    }
    this.settingsApplied.emit(this.weatherSettingsForm.value);
  }

}
