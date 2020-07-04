const { maxProfit } = require("./best-time-to-buy-and-sell-stock");

describe("maxProfit", () => {
  test("Example test case 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });

  test("Example test case 2", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });

  test("Empty input", () => {
    const prices = [];
    expect(maxProfit(prices)).toBe(0);
  });

  test("Single element in input", () => {
    const prices = [10];
    expect(maxProfit(prices)).toBe(0);
  });
});