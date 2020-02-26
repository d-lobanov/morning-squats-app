export function calcSquats(date, { hour, minutes }) {
  const hourDiff = date.getHours() - hour;
  const minDiff = date.getMinutes() - minutes;

  if (hourDiff < 0 || (hourDiff === 0 && minDiff < 0)) {
    return null;
  }

  return 60 * hourDiff + minDiff;
}

export function getDeclensionForm(squats) {
  const forms = ["приседания", "приседания", "приседаний"];

  const modulo100 = squats % 100;
  const modulo10 = squats % 10;

  if (modulo100 > 10 && modulo100 < 20) {
    return forms[2];
  }

  if (modulo10 === 1) {
    return forms[0];
  }

  if (modulo10 > 1 && modulo10 < 5) {
    return forms[1];
  }

  return forms[2];
}
