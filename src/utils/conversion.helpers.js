const converters = {
  toCelsius(tempF) {
    return ((tempF - 32) * 5) / 9;
  },
  toFahrenheit(tempC) {
    return ((tempC - 32) * 5) / 9;
  },
};

function tryConvert(temperature, conversion) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }

  const output = converters[conversion](input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}
