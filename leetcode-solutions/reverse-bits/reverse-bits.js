// July 17, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/648/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
    let result = 0;
    let i = 0;
    while (n > 0) {
        // Expected 111001011110000010100101000000
        // Actual   1011010111110000101100011
        if (n % 2 === 0) {
            result += Math.pow(2, i);
        }
        n = Math.floor(n / 2);
        i++;
    }
    return result;
};

module.exports = { reverseBits };