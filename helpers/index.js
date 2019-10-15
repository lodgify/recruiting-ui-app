export function renderIf(condition, component) {
  if (condition) {
    return component;
  }
  return null;
}

export function daysLeft(departure, arrival) {
  const dayMs = 1000 * 60 * 60 * 24;
  const arrivalDay = new Date(arrival);
  const departureDay = new Date(departure);
  const Result =
    Math.round(departureDay.getTime() - arrivalDay.getTime()) / dayMs;

  return Math.floor(Result);
}
