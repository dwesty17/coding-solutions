const {reverseString} = require("./reverse-string");

describe("reverseString", () => {
  test("Example test case 1", () => {
    const input = ["h", "e", "l", "l", "o"];
    reverseString(input);
    expect(input).toEqual(["o", "l", "l", "e", "h"]);
  });

  test("Example test case 2", () => {
    const input = ["H", "a", "n", "n", "a", "h"];
    reverseString(input);
    expect(input).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});
