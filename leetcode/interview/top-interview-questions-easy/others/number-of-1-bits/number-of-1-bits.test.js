const { hammingWeight } = require("./number-of-1-bits");

describe("hammingWeight", () => {
  test("Example test case 1", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  test("Example test case 2", () => {
    expect(hammingWeight(128)).toBe(1);
  });

  test("Example test case 3", () => {
    expect(hammingWeight(4294967293)).toBe(31);
  });

  test("Input is 0", () => {
    expect(hammingWeight(0)).toBe(0);
  });

  test("Input is 15", () => {
    expect(hammingWeight(15)).toBe(4);
  });
});