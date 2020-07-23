// July 22, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
    const mZeroMap = {};
    const nZeroMap = {};

    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[m].length; n++) {
            if (matrix[m][n] === 0) {
                mZeroMap[m] = true;
                nZeroMap[n] = true;
            }
        }
    }

    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[m].length; n++) {
            if (mZeroMap[m] || nZeroMap[n]) {
                matrix[m][n] = 0;
            }
        }
    }
};

module.exports = { setZeroes };