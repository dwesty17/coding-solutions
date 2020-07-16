const { hammingDistance } = require("./hamming-distance");

describe("hammingDistance", () => {
  test("Example test case 1", () => {
    expect(hammingDistance(1, 4)).toBe(2);
  });

  test("Both inputs are 0", () => {
    expect(hammingDistance(0, 0)).toBe(0);
  });

  test("Both inputs are really big", () => {
    expect(hammingDistance(203943, 324342)).toBe(12);
  });
});