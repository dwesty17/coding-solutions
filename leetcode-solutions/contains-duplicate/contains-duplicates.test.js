const { containsDuplicate } = require("./contains-duplicate");

describe("rotate", () => {
  test("Example test case 1", () => {
    const input = [ 1, 2, 3, 1 ];
    expect(containsDuplicate(input)).toBe(true);
  });

  test("Example test case 2", () => {
    const input = [ 1, 2, 3, 4 ];
    expect(containsDuplicate(input)).toBe(false);
  });

  test("Example test case 2", () => {
    const input = [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ];
    expect(containsDuplicate(input)).toBe(true);
  });

  test("Empty array", () => {
    const input = [];
    expect(containsDuplicate(input)).toBe(false);
  });

  test("Multiple 0s", () => {
    const input = [ 0, 1, 2, 5, 0 ];
    expect(containsDuplicate(input)).toBe(true);
  });
});
