// May 18, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const squareSize = matrix[0].length;
  for (let i = 0; i <= Math.floor(squareSize / 2); i++) {
    for (let j = i; j < squareSize - 1 - i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[squareSize - 1 - j][i];
      matrix[squareSize - 1 - j][i] = matrix[squareSize - 1 - i][squareSize - 1 - j];
      matrix[squareSize - 1 - i][squareSize - 1 - j] = matrix[j][squareSize - 1 - i];
      matrix[j][squareSize - 1 - i] = temp;
    }
  }
};

module.exports = { rotate };
