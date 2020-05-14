// May 12, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const result = [];
  let carryDigit = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carryDigit === 10) {
      result.unshift(0);
      carryDigit = 1;
    } else {
      result.unshift(digits[i] + carryDigit);
      carryDigit = 0;
    }
  }

  if (carryDigit === 1) {
    result.unshift(1);
  }

  return result;
};

module.exports = { plusOne };
