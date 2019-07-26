
// Number (plain, decimal, temperature) unit hepers
export function celciusToFarenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

export function farenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
