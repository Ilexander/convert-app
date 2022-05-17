function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert;
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function UAHtoUSD(value, currency) {
  return value * currency;
}

function format(number) {
  return number.toFixed(3);
}

export { tryConvert, UAHtoUSD, format };
