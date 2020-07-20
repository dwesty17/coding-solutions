const { firstUniqChar } = require("./first-uniq-char");

describe("firstUniqChar", () => {
  test("Example test case 1", () => {
    const input = "leetcode";
    expect(firstUniqChar(input)).toBe(0);
  });

  test("Example test case 1", () => {
    const input = "loveleetcode";
    expect(firstUniqChar(input)).toBe(2);
  });
});
