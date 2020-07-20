// May 21, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  for (let i = 0; i < s.length / 2; i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
};

module.exports = { reverseString };
