// May 12, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const result = [];

  const nums1Frequency = {};
  nums1.forEach((num) => {
    createOrIncrement(nums1Frequency, num);
  });

  const nums2Frequency = {};
  nums2.forEach((num) => {
    createOrIncrement(nums2Frequency, num);
    if (nums1Frequency[num] && (nums2Frequency[num] <= nums1Frequency[num])) {
      result.push(num);
    }
  });

  return result;
};

const createOrIncrement = (frequencyMap, num) => {
  frequencyMap[num] ? frequencyMap[num]++ : frequencyMap[num] = 1;
};

module.exports = { intersect };
