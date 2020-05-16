const {isValidSudoku, calculateSubgroupIndex} = require("./is-valid-sudoku");

describe("isValidSudoku", () => {
  test("Example test case 1", () => {
    const input = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    expect(isValidSudoku(input)).toBe(true);
  });

  test("Example test case 2", () => {
    const input = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    expect(isValidSudoku(input)).toBe(false);
  });

  test("Invalid row", () => {
    const input = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", "2", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    expect(isValidSudoku(input)).toBe(false);
  });

  test("Invalid sub group", () => {
    const input = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", "3", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    expect(isValidSudoku(input)).toBe(false);
  });
});

describe("calculateSubgroupIndex", () => {
  test("calculates all the subgroup indices correctly", () => {
    expect(calculateSubgroupIndex(0, 0)).toBe(0);
    expect(calculateSubgroupIndex(0, 2)).toBe(0);
    expect(calculateSubgroupIndex(2, 0)).toBe(0);
    expect(calculateSubgroupIndex(2, 2)).toBe(0);


    expect(calculateSubgroupIndex(3, 0)).toBe(1);
    expect(calculateSubgroupIndex(3, 2)).toBe(1);
    expect(calculateSubgroupIndex(5, 0)).toBe(1);
    expect(calculateSubgroupIndex(5, 2)).toBe(1);


    expect(calculateSubgroupIndex(6, 0)).toBe(2);
    expect(calculateSubgroupIndex(6, 2)).toBe(2);
    expect(calculateSubgroupIndex(8, 0)).toBe(2);
    expect(calculateSubgroupIndex(8, 2)).toBe(2);


    expect(calculateSubgroupIndex(0, 3)).toBe(3);
    expect(calculateSubgroupIndex(0, 5)).toBe(3);
    expect(calculateSubgroupIndex(2, 3)).toBe(3);
    expect(calculateSubgroupIndex(2, 5)).toBe(3);


    expect(calculateSubgroupIndex(3, 3)).toBe(4);
    expect(calculateSubgroupIndex(3, 5)).toBe(4);
    expect(calculateSubgroupIndex(5, 3)).toBe(4);
    expect(calculateSubgroupIndex(5, 5)).toBe(4);


    expect(calculateSubgroupIndex(6, 3)).toBe(5);
    expect(calculateSubgroupIndex(6, 5)).toBe(5);
    expect(calculateSubgroupIndex(8, 3)).toBe(5);
    expect(calculateSubgroupIndex(8, 5)).toBe(5);


    expect(calculateSubgroupIndex(0, 6)).toBe(6);
    expect(calculateSubgroupIndex(0, 8)).toBe(6);
    expect(calculateSubgroupIndex(2, 6)).toBe(6);
    expect(calculateSubgroupIndex(2, 8)).toBe(6);


    expect(calculateSubgroupIndex(3, 6)).toBe(7);
    expect(calculateSubgroupIndex(3, 8)).toBe(7);
    expect(calculateSubgroupIndex(5, 6)).toBe(7);
    expect(calculateSubgroupIndex(5, 8)).toBe(7);


    expect(calculateSubgroupIndex(6, 6)).toBe(8);
    expect(calculateSubgroupIndex(6, 8)).toBe(8);
    expect(calculateSubgroupIndex(8, 6)).toBe(8);
    expect(calculateSubgroupIndex(8, 8)).toBe(8);
  });
});
