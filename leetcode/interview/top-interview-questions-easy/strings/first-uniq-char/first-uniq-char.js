// May 23, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const frequencyMap = {};

  s.split("").forEach((char) => {
    frequencyMap[char] ? frequencyMap[char]++ : frequencyMap[char] = 1;
  });

  for (let i = 0; i < s.length; i++) {
    if (frequencyMap[s[i]] === 1) { return i; }
  }

  return -1;
};

module.exports = { firstUniqChar };
