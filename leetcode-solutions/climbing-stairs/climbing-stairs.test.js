const { climbStairs } = require("./climbing-stairs");

describe("climbStairs", () => {
  test("Example test case 1", () => {
    expect(climbStairs(2)).toBe(2);
  });

  test("Example test case 2", () => {
    expect(climbStairs(3)).toBe(3);
  });

  test("n === 4", () => {
    expect(climbStairs(4)).toBe(5);
  });

  test("n === 5", () => {
    expect(climbStairs(5)).toBe(8);
  });

  test("n === 6", () => {
    expect(climbStairs(6)).toBe(13);
  });

  test("n === 44", () => {
    expect(climbStairs(44)).toBe(1134903170);
  });
});