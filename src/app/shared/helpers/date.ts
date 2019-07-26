// Date and datetime operations helper

import * as moment from 'moment';

export function getLocalDateString(date: any): string {
  return new Date(date).toISOString().split('T')[0];
}

export function getDateString(date, isMilliseconds?: boolean): string {
  const divider = isMilliseconds ? 1000 : 1;
  return moment.unix(date / divider).format('dddd, Do MMMM YYYY');
}

export function isToday(date: string) {
  const today = new Date().toISOString().slice(0, 10);
  return date === today;
}

export function getWeekDay(dt: string): string {
  const date = moment(dt);
  const dayNum = date.day();
  const dayStr = moment.weekdays(dayNum);
  return dayStr;
}

export function getDateParts(date: string) {
  const dateParts = date.split(' ');
  return { date: dateParts[0], time: dateParts[1]};
}

export function getTimeTitle(time: string): string {
  let timeTitle = '';
  const timeArr = time.split(':');
  switch (timeArr[0]) {
    case '09':
      timeTitle = 'Morning';
      break;
    case '12':
      timeTitle = 'Day';
      break;
    case '18':
      timeTitle = 'Evening';
      break;
    case '21':
      timeTitle = 'Night';
      break;
  }
  return timeTitle;
}
