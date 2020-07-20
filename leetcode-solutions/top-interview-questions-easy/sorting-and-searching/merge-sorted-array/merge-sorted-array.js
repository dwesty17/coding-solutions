// June 25, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  const originalLength = nums1.length;
  nums1.splice(m);
  let result = [];

  while (result.length < m + n) {
    if (nums1.length === 0) {
      result = result.concat(nums2.splice(0));
      break;
    } else if (nums2.length === 0) {
      result = result.concat(nums1.splice(0));
      break;
    }

    if (nums1[0] <= nums2[0]) {
      result.push(nums1.splice(0, 1)[0]);
    } else {
      result.push(nums2.splice(0, 1)[0]);
    }
  }

  nums1.splice(0, 0, ...result);

  while (nums1.length < originalLength) {
    nums1.push(0);
  }
};

module.exports = { merge };
