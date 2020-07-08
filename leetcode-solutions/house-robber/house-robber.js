// July 7, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (!nums || nums.length === 0) { return 0; }
  if (nums.length === 1) { return nums[0]; }

  let lastLast = nums[0];
  let last = nums[1];

  for (let i = 2; i < nums.length; i++) {
    const curr = Math.max(nums[i] + lastLast, last);
    lastLast = Math.max(lastLast, last);
    last = curr;
  }

  return Math.max(last, lastLast);
};

module.exports = { rob };
