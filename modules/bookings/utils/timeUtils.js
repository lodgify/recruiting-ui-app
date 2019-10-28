const addZero = number => number < 10 ? '0' + number : number;

export const dateFormatter = date => {
  return `${addZero(date.getUTCDate())} / ${addZero(date.getUTCMonth() + 1)} / ${date.getFullYear()}`;
};
