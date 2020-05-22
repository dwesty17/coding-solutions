const { reverse } = require("./reverse");

describe("reverseInteger", () => {
  test("Example test case 1", () => {
    const input = 123;
    expect(reverse(input)).toBe(321);
  });

  test("Example test case 2", () => {
    const input = -123;
    expect(reverse(input)).toBe(-321);
  });

  test("Example test case 3", () => {
    const input = 120;
    expect(reverse(input)).toBe(21);
  });

  test("Super large numbers", () => {
    const input = 1534236469;
    expect(reverse(input)).toBe(0);
  });
});
