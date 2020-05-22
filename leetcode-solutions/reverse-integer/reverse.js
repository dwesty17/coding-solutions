// May 22, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const isNegative = x < 0;
  const reversedNum = parseInt(Math.abs(x).toString().split("").reverse().join(""));

  if (reversedNum <= -2147483648 || reversedNum >= 2147483647) { return 0; }

  return isNegative ? -reversedNum : reversedNum;
};

module.exports = { reverse };
