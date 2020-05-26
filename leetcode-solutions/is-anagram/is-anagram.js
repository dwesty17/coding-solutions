// May 24, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) { return false; }

  const frequencyMap = {};

  for (let i = 0; i < s.length; i++) {
    frequencyMap[s[i]] ? frequencyMap[s[i]]++ : frequencyMap[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!frequencyMap[t[i]]) { return false; }
    else if (frequencyMap[t[i]] === 1) { delete frequencyMap[t[i]] }
    else { frequencyMap[t[i]]--; }
  }

  return Object.keys(frequencyMap).length === 0
};

module.exports = { isAnagram };
