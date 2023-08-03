const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return Math.round(celsius * 10) /10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9 /5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};
const celsius = convertToCelsius(-32)
const fahrenheit = convertToFahrenheit(-10)
console.log(celsius);
console.log(fahrenheit)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
