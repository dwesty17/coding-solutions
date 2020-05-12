// May 11, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const numbersThatAppearOnce = {};
  nums.forEach((num) => {
    if (numbersThatAppearOnce[num]) {
      delete numbersThatAppearOnce[num];
    } else {
      numbersThatAppearOnce[num] = true;
    }
  });
  return parseInt(Object.keys(numbersThatAppearOnce)[0]);
};

module.exports = { singleNumber };
