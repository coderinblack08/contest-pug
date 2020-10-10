export const abbreviateNumber = (value: number): string => {
  const abbreviations = ['', 'k', 'm', 'b', 't'];
  const number = Math.floor(`${value}`.length / 3);
  if (value < 1000) {
    return value.toString();
  }
  let stringValue: any = parseFloat(
    (number ? value / 1000 ** number : value).toPrecision(2)
  );
  if (stringValue % 1 !== 0) {
    stringValue = stringValue.toFixed(1);
  }
  return stringValue + abbreviations[number];
};
