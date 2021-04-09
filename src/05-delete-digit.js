/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const num = n.toString();
  let temp = '';
  for (let i = 0; i < num.length; i++) {
    temp = num;
    temp = temp.substring(0, i) + temp.substring(i + 1);
    if (Number(temp) > max) {
      max = Number(temp);
    }
  }
  return max;
}
module.exports = deleteDigit;
