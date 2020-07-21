// July 21, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const result = [];

    if (nums.length < 3) { return result; }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) { break; }
        if (nums[i] === nums[i - 1]) { continue; }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum < target) { j++; }
            if (sum > target) { k++; }

            if (sum === target) {
                results.push([nums[i], nums[j], nums[k]]);
            }

            while (nums[j] === nums[j + 1]) { j++; }
            while (nums[k] === nums[k - 1]) { k--; }

            j++;
            k--;
        }
    }

    return result;
};

module.exports = { threeSum };