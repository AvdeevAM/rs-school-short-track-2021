/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let middlePos = Math.floor((end + start) / 2);
  for (let i = 0; i < array.length; i++) {
    if (value === array[middlePos]) {
      return middlePos;
    }
    if (value > array[middlePos]) {
      start = middlePos;
    } else {
      end = middlePos;
    }
    middlePos = Math.floor((end + start) / 2);
  }
  return 0;
}

module.exports = findIndex;
