// May 8, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const newStartIndex = k % nums.length;
  const newStart = nums.splice(nums.length - newStartIndex);
  nums.splice(0, 0, ...newStart);
};

module.exports = { rotate };
