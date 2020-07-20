const { maxProfit } = require("./max-profit");

describe("max-profit", () => {
  test("Example test case 1", () => {
    expect(maxProfit([ 7, 1, 5, 3, 6, 4 ])).toBe(7);
  });

  test("Example test case 2", () => {
    expect(maxProfit([ 1, 2, 3, 4, 5 ])).toBe(4);
  });

  test("Example test case 3", () => {
    expect(maxProfit([ 7, 6, 4, 3, 1 ])).toBe(0);
  });

  test("Test cases with 0 in them", () => {
    expect(maxProfit([ 10, 0, 0, 4, 3, 0, 2 ])).toBe(6);
  });
});
