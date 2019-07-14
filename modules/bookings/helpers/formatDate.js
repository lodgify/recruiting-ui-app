/*
 * Returns formatted date.
 * If compact is set to false returns 22/08/2019
 *
 * @param {date} Date
 * @param {string} locale ='en-US'
 * @param {boolean} compact = false
 * @return {arr}
 *
 */

const longFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formatDate = (date, locale = 'en-US', compact = false) => {
  switch (compact) {
    case true:
      return new Intl.DateTimeFormat(locale).format(date);
    case false:
      return new Intl.DateTimeFormat(locale, longFormat).format(date);
  }
};

export default formatDate;
