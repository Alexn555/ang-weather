import {Injectable} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  defaultSettings = {
    id: null,
    timeOut: 2000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true
  };
  constructor(private notificationService: NotificationsService) { }

  success(title: string, message: string, id?: string) {
    this.defaultSettings.id = id ? id : null;
    this.notificationService.success(title, message, this.defaultSettings);
  }

  warning(title: string, message: string, id?: string) {
    this.defaultSettings.id = id ? id : null;
    this.notificationService.warn(title, message, this.defaultSettings);
  }

  error(title: string, message: string, id?: string) {
    this.defaultSettings.id = id ? id : null;
    this.notificationService.error(title, message, this.defaultSettings);
  }

  remove(id: string) {
    this.notificationService.remove(id);
  }
}
