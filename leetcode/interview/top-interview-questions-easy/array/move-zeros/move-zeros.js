// May 14, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeros = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
};

module.exports = { moveZeros };
