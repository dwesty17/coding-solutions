// July 19, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        result.push([]);

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i].push(1);
            } else {
                result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
    }

    return result;
};

module.exports = { generate };