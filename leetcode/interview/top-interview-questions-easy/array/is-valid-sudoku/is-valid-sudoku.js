// May 16, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const seen = {
    row: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    column: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    subgroup: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  };

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const cellVal = board[row][column];
      if (cellVal !== ".") {
        const subgroup = calculateSubgroupIndex(row, column);
        if (seen.row[row][cellVal] || seen.column[column][cellVal] || seen.subgroup[subgroup][cellVal]) {
          return false;
        } else {
          seen.row[row][cellVal] = true;
          seen.column[column][cellVal] = true;
          seen.subgroup[subgroup][cellVal] = true;
        }
      }
    }
  }

  return true;
};

const calculateSubgroupIndex = (row, col) => {
  if (row >= 0 && row <= 2 && col >= 0 && col <= 2) { return 0; }
  if (row >= 3 && row <= 5 && col >= 0 && col <= 2) { return 1; }
  if (row >= 6 && row <= 8 && col >= 0 && col <= 2) { return 2; }

  if (row >= 0 && row <= 2 && col >= 3 && col <= 5) { return 3; }
  if (row >= 3 && row <= 5 && col >= 3 && col <= 5) { return 4; }
  if (row >= 6 && row <= 8 && col >= 3 && col <= 5) { return 5; }

  if (row >= 0 && row <= 2 && col >= 6 && col <= 8) { return 6; }
  if (row >= 3 && row <= 5 && col >= 6 && col <= 8) { return 7; }
  if (row >= 6 && row <= 8 && col >= 6 && col <= 8) { return 8; }

  throw new Error("Couldn't calculate subgroup index")
};

module.exports = { isValidSudoku, calculateSubgroupIndex };
