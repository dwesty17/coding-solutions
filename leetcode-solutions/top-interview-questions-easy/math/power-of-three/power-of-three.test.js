const { isPowerOfThree } = require("./power-of-three");

describe("powerOfThree", () => {
  test("Example test case 1", () => {
    expect(isPowerOfThree(27)).toBe(true);
  });

  test("Example test case 2", () => {
    expect(isPowerOfThree(0)).toBe(false);
  });

  test("Example test case 3", () => {
    expect(isPowerOfThree(9)).toBe(true);
  });

  test("Example test case 4", () => {
    expect(isPowerOfThree(45)).toBe(false);
  });

  test("First 10 numbers", () => {
    expect(isPowerOfThree(1)).toBe(true);
    expect(isPowerOfThree(2)).toBe(false);
    expect(isPowerOfThree(3)).toBe(true);
    expect(isPowerOfThree(4)).toBe(false);
    expect(isPowerOfThree(5)).toBe(false);
    expect(isPowerOfThree(6)).toBe(false);
    expect(isPowerOfThree(7)).toBe(false);
    expect(isPowerOfThree(8)).toBe(false);
    expect(isPowerOfThree(9)).toBe(true);
    expect(isPowerOfThree(10)).toBe(false);
  });

  test("Large inputs", () => {
    expect(isPowerOfThree(14348907)).toBe(true);
    expect(isPowerOfThree(14348908)).toBe(false);
  });
});
