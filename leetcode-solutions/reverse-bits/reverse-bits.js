// July 17, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/648/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
    const binaryString = n.toString(2);
    const reverseBinaryString = binaryString.split("").reverse().join("");
    const padding = Array(Math.max(32 - reverseBinaryString.length, 0)).fill(0).join("");
    return parseInt(`${reverseBinaryString}${padding}`, 2);
};

module.exports = { reverseBits };