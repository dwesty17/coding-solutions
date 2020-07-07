// July 5, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let result = -2147483648;
    let sum = 0;

    for (const num of nums) {
        const nextSum = sum + num;
        result = Math.max(result, nextSum);
        sum = nextSum >= 0 ? nextSum : 0;
    }

    return result;
};

module.exports = {maxSubArray};