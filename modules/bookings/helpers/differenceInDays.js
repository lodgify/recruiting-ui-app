/*
 * Formats a date to DD-MM-YY format
 * @private
 * @param {string} dateString
 * @return {Date}
 *
 */

const formatToComparableDate = dateString => {
  const [day, month, year] = dateString.split('/');
  const comp = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return comp;
};

/*
 * Returns time in absolute num
 * @private
 * @param {string} dateString
 * @return {number}
 *
 */

const getAbsTime = dateString => {
  const absTime = Math.abs(new Date(dateString));
  return absTime;
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
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
};

export default differenceInDays;
