// May 10, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const observedNumbers = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (observedNumbers[currentNum]) {
      return true;
    } else {
      observedNumbers[currentNum] = true;
    }
  }
  return false;
};

module.exports = { containsDuplicate };
