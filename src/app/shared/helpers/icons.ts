// Icons helper

export function getIconClassFromWeatherApi(icon: string): string {
  let iconClass = '';
  const mainClass = 'mdi ';
  const prefix = 'mdi-weather-';
  icon = icon.substr(0, 2); // only neutral
  switch (icon) {
    case '01': // clear sky
      iconClass = 'sunny';
      break;
    case '02': // few clouds
      iconClass = 'cloudy';
      break;
    case '03': // scattered clouds
      iconClass = 'windy-variant';
      break;
    case '04': // broken clouds
      iconClass = 'cloudy';
      break;
    case '09': // shower rain
      iconClass = 'pouring';
      break;
    case '10': // light rain
      iconClass = 'rainy';
      break;
    case '11': // thunderstorm
      iconClass = 'hurricane';
      break;
    case '13': // snow
      iconClass = 'snowy';
      break;
    case '50': // mist
      iconClass = 'fog';
      break;
  }
  return `${mainClass}${prefix}${iconClass}`;
}
