/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsArray = [domains.length];
  const res = {};
  if (domains[0] === undefined) {
    return res;
  }
  for (let i = 0; i < domains.length; i++) {
    dnsArray[i] = domains[i].split('.').reverse();
  }
  let temp = '';
  const strArray = [];
  for (let i = 0; i < dnsArray.length; i++) {
    strArray[i] = `.${dnsArray[i].join('.')}`;
  }
  let count = 0;
  for (let i = 0; i < dnsArray.length; i++) {
    temp = '';
    for (let j = 0; j < dnsArray[i].length; j++) {
      temp += `.${dnsArray[i][j]}`;
      count = 0;
      for (let k = 0; k < strArray.length; k++) {
        if (strArray[k].includes(temp) === true) {
          count++;
        }
      }
      res[temp] = count;
    }
  }
  return res;
}

module.exports = getDNSStats;
