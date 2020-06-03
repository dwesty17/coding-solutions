const {longestCommonPrefix} = require("./longest-common-prefix");

describe("longestCommonPrefix", () => {
  test("Example test case 1", () => {
    const input = ["flower", "flow", "flight"];
    expect(longestCommonPrefix(input)).toBe("fl");
  });

  test("Example test case 2", () => {
    const input = ["dog", "racecar", "car"];
    expect(longestCommonPrefix(input)).toBe("");
  });
});
