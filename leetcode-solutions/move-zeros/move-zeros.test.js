const {moveZeros} = require("./move-zeros");

describe("moveZeros", () => {
  test("Example test case 1", () => {
    const input = [0, 1, 0, 3, 12];
    moveZeros(input);
    expect(input).toEqual([1, 3, 12, 0, 0]);
  });

  test("Empty list", () => {
    const input = [];
    moveZeros(input);
    expect(input).toEqual([]);
  });

  test("A lot of 0s", () => {
    const input = [0, 0, 0, 1, 2, 0, 5, 0, 0, 7, 0, 0];
    moveZeros(input);
    expect(input).toEqual([1, 2, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test("Only 0s and 1s", () => {
    const input = [0, 1, 0, 1, 1];
    moveZeros(input);
    expect(input).toEqual([1, 1, 1, 0, 0]);
  });
});
