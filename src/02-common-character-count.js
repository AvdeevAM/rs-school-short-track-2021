/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const myMap = new Map();
  let res = 0;
  let value = 0;
  for (let i = 0; i < s1.length; i++) {
    if (myMap.has(s1.charAt(i)) === false) {
      myMap.set(s1.charAt(i), 1);
    } else {
      value = myMap.get(s1.charAt(i));
      myMap.set(s1.charAt(i), value + 1);
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (myMap.has(s2.charAt(j)) === true && myMap.get(s2.charAt(j)) !== 0) {
      res++;
      value = myMap.get(s2.charAt(j));
      myMap.set(s2.charAt(j), value - 1);
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
