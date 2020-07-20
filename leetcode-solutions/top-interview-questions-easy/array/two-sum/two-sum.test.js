const { twoSum } = require("./two-sum");

describe("twoSum", () => {
  test("Example test case 1", () => {
    const input = [2, 7, 11, 15];
    expect(twoSum(input, 9).sort(ascending)).toEqual([0, 1]);
  });

  test("Unsorted input", () => {
    const input = [11, 7, 15, 2];
    expect(twoSum(input, 9).sort(ascending)).toEqual([1, 3]);
  });

  test("Input that contains negative numbers", () => {
    const input = [-1, 7, 11, 15];
    expect(twoSum(input, 10).sort(ascending)).toEqual([0, 2]);
  });

  test("Can't use one element twice", () => {
    const input = [3, 2, 4];
    expect(twoSum(input, 6).sort(ascending)).toEqual([1, 2]);
  });

  test("Can't use one element twice", () => {
    const input = [3, 2, 4];
    expect(twoSum(input, 6).sort(ascending)).toEqual([1, 2]);
  });

  test("Array may have duplicates", () => {
    const input = [3, 2, 7, 3, 7, 9, 30, 7, 7];
    expect(twoSum(input, 6).sort(ascending)).toEqual([0, 3]);
  });
});

const ascending = (a, b) => a - b;
