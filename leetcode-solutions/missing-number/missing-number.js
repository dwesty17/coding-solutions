// July 20, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/722/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const isNumberPresentArray = new Array(nums.length + 1).fill(false);
    nums.forEach((num) => { isNumberPresentArray[num] = true });
    return isNumberPresentArray.findIndex((isPresent) => !isPresent);
};

module.exports = { missingNumber };