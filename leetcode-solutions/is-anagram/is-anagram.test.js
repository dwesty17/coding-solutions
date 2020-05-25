const { isAnagram } = require("./is-anagram");

describe("isAnagram", () => {
  test("Example test case 1", () => {
    const s = "anagram";
    const t = "nagaram";
    expect(isAnagram(s, t)).toBe(true);
  });

  test("Example test case 1", () => {
    const s = "rat";
    const t = "car";
    expect(isAnagram(s, t)).toBe(false);
  });
});
