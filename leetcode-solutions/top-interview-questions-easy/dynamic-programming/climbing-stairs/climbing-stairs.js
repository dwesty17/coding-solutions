// July 3, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

const memoizedResults = [1, 1, 2];

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    if (n === 1) { return 1; }
    if (n === 2) { return 2; }

    return getOrCalculate(n - 1) + getOrCalculate(n - 2);
};

const getOrCalculate = (n) => {
    if (memoizedResults[n]) {
        return memoizedResults[n];
    }

    memoizedResults[n] = climbStairs(n);

    return memoizedResults[n];
};

module.exports = { climbStairs };