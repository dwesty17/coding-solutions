// May 24, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  return t === s.split("").join("");
};

module.exports = { isAnagram };
