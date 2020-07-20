// May 5, 2020
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i+1]) {
      nums.splice(i + 1, 1);
    }
  }
  return nums.length;
};

module.exports = { removeDuplicates };
