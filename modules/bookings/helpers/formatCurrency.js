/**
 * Format currency
 *
 * @param {Number} amount 50000
 * @param {Boolean} noDivision defaults to false
 * @returns {String} $50000
 *
 */

// TODO: Write logic to account for other locales depending on the currencyCode

const formatCurrency = (amount, currencyCode = 'USD') => {
  const options = {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
  };
  const formatter = new Intl.NumberFormat('en-US', options);
  const result = formatter.format(amount);
  return result;
};

export default formatCurrency;
