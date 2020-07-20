const {plusOne} = require("./plus-one");

describe("plusOne", () => {
  test("Example test case 1", () => {
    const input = [1, 2, 3];
    expect(plusOne(input)).toEqual([1, 2, 4]);
  });

  test("Example test case 2", () => {
    const input = [4, 3, 2, 1];
    expect(plusOne(input)).toEqual([4, 3, 2, 2]);
  });

  test("With carryover and no leading digits", () => {
    const input = [9, 9, 9, 9];
    expect(plusOne(input)).toEqual([1, 0, 0, 0, 0]);
  });

  test("With multiple leading digits", () => {
    const input = [0, 0, 9, 9, 9, 9];
    expect(plusOne(input)).toEqual([0, 1, 0, 0, 0, 0]);
  });

  test("Long input list", () => {
    const input = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
    expect(plusOne(input)).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });
});
