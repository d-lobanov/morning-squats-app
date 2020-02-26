function padLeadingZero(number) {
  return number.toString().padStart(2, '0');
}

export function humanizeTime(date) {
  const hours = padLeadingZero(date.getHours());
  const minutes = padLeadingZero(date.getMinutes());
  const seconds = padLeadingZero(date.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
}
