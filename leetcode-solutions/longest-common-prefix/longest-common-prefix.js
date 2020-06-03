// June 1, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let longestPrefix = strs[0] || "";
  strs.forEach((str) => {
    let newLongestPrefix = "";
    for (let i = 0; i < str.length || i < longestPrefix.length; i++) {
      if (str[i] === longestPrefix[i]) {
        newLongestPrefix = `${newLongestPrefix}${str[i]}`;
      } else {
        break;
      }
    }
    longestPrefix = newLongestPrefix;
  });
  return longestPrefix
};

module.exports = { longestCommonPrefix };
