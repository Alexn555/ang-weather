export interface CurrentDay {
  location: string;
  fullDate: string;
  weekDay: string;
  temp: number;
  weather: string;
  iconClass: string;
  details: Array<CurrentDayDetails>;
}

export interface CurrentDayDetails {
  timeTitle: string;
  temp: number;
}

export interface Week {
  date: string;
  weekDay: string;
  temp: number;
  iconClass: string;
}
