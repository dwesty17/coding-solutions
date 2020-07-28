// July 28, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
    if (nums.length < 3) { return false; }

    let smallest = Number.MAX_SAFE_INTEGER;
    let secondSmallest = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= smallest) { smallest = nums[i] }
        else if (nums[i] <= secondSmallest) { secondSmallest = nums[i] }
        else { return true; }
    }

    return false;
};

module.exports = { increasingTriplet };