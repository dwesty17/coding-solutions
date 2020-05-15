// May 15, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const indicesMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (indicesMap[nums[i]]) {
      indicesMap[nums[i]].unshift(i);
    } else {
      indicesMap[nums[i]] = [i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const indexOfCounterpart = indicesMap[target - nums[i]];
    if (indexOfCounterpart !== undefined && indexOfCounterpart[0] !== i) {
      return [i, indexOfCounterpart[0]];
    }
  }
};

module.exports = { twoSum };
