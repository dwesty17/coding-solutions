// May 28, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  return haystack.indexOf(needle);
};

module.exports = { strStr };
