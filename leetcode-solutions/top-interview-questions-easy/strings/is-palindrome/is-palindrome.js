// May 26, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

const ALPHANUMERIC_REGEX = /[^\w]/gi;

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const alphanumericForward = s.replace(ALPHANUMERIC_REGEX, "");
  const alphanumericReverse = alphanumericForward.split("").reverse().join("");
  return alphanumericForward.toUpperCase() === alphanumericReverse.toUpperCase();
};

module.exports = { isPalindrome };
