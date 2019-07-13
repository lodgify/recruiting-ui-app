/*
 * Accepts array and removes duplicates
 * @param {array} arr
 * @return {arr}
 *
 */

const arrayUnique = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) >= index;
  });
};
