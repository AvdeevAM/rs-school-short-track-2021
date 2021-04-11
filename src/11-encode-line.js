/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let temp = str.charAt(0);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (temp !== str.charAt(i)) {
      if (count > 1) {
        res += count + str.charAt(i - 1);
        temp = str.charAt(i);
      } else {
        res += str.charAt(i - 1);
        temp = str.charAt(i);
      }
      count = 0;
    }
    count++;
    if (i === str.length - 1) {
      if (count > 1) {
        res += count + str.charAt(i);
      } else {
        res += str.charAt(i);
      }
    }
  }
  return res;
}

module.exports = encodeLine;
