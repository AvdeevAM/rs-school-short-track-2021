/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function compare(a, b) {
  return a - b;
}

function sortByHeight(arr) {
  let temp = [...arr];
  const res = [...arr];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === -1) {
      temp.splice(i, 1);
      i--;
    }
  }
  temp = temp.sort(compare);
  for (let j = 0; j < res.length; j++) {
    if (res[j] !== -1) {
      res[j] = temp.shift();
    }
  }
  return res;
}

module.exports = sortByHeight;
