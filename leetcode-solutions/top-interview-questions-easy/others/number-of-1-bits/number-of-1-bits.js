// July 15, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/565/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    let result = 0;

    while (n > 0) {
        result += n % 2;
        n = Math.floor(n / 2);
    }

    return result;
};

module.exports = { hammingWeight };