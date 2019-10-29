const addZero = number => number < 10 ? '0' + number : number;

export const dateFormatter = date => {
  return `${addZero(date.getUTCDate())}/${addZero(date.getUTCMonth() + 1)}/${date.getFullYear()}`;
};

export const dateDiff = (date1, date2) => new Date(date2.getTime() - date1.getTime());

export const dateDiffByDay = (date1, date2) => dateDiff(date1, date2).getUTCDate() - 1;
