/*
 * Compares two dates in DD-MM-YY format and returns difference in dates.
 *
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 *
 */

const differenceInDays = (date1, date2) => {
  let timeDifference = Math.abs(new Date(date1) - new Date(date2));
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};

export default differenceInDays;
