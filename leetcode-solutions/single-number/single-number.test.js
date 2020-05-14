const { singleNumber } = require("./single-number");

describe("singleNumber", () => {
  test("Example test case 1", () => {
    const input = [2, 2, 1];
    expect(singleNumber(input)).toBe(1);
  });

  test("Example test case 2", () => {
    const input = [4, 1, 2, 1, 2];
    expect(singleNumber(input)).toBe(4);
  });
});
