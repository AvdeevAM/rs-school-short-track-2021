/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const dogPos = email.lastIndexOf('@');
  return email.substring(dogPos + 1, email.length);
}

module.exports = getEmailDomain;
