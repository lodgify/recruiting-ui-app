// From: https://stackoverflow.com/a/42070353/3486068
// Not 100% reliable but enough for this challenge's purposes
// TODO: make it work with next.js (window not defined)
export const getLocale = () =>
  window.navigator.languages
    ? window.navigator.languages[0]
    : window.navigator.userLanguage || window.navigator.language;

// TODO: memoize to avoid creating new formatters
export const currencyFormatter = (locale, currencyCode) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });
