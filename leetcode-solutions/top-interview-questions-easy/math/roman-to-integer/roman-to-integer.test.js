const { romanToInt } = require("./roman-to-integer");

describe("romanToInt", () => {
  test("Example test case 1", () => {
    expect(romanToInt("III")).toBe(3);
  });

  test("Example test case 2", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test("Example test case 3", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  test("Example test case 4", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test("Example test case 5", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  test("Empty string", () => {
    expect(romanToInt("")).toBe(0);
  });
});