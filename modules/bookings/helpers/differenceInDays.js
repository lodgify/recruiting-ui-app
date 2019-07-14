/*
 * Formats a date to DD-MM-YY format
 *
 * @param {string} dateString
 * @return {Date}
 *
 */

const formatToComparableDate = dateString => {
  const [day, month, year] = dateString.split('/');

  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

/*
 * Returns time in absolute num
 *
 * @param {string} dateString
 * @return {number}
 *
 */

const getAbsTime = dateString => {
  return Math.abs(formatToComparableDate(dateString).getTime());
};

/*
 * Compares two dates in DD-MM-YY format and returns difference in dates.
 *
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 *
 */

const differenceInDays = (date1, date2) => {
  const formattedDate1 = getAbsTime(date1);
  const formattedDate2 = getAbsTime(date2);
  const diff = formattedDate1 - formattedDate2;
  const days = Math.round(diff / (3600000 * 24));
  return days;
};

export default differenceInDays;
