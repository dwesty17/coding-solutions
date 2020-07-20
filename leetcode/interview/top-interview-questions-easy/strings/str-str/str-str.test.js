const { strStr } = require("./str-str");

describe("strStr", () => {
  test("Example test case 1", () => {
    const haystack = "hello";
    const needle = "ll";
    expect(strStr(haystack, needle)).toBe(2);
  });

  test("Example test case 2", () => {
    const haystack = "aaaaa";
    const needle = "bba";
    expect(strStr(haystack, needle)).toBe(-1);
  });

  test("Multiple matches in haystack", () => {
    const haystack = "foostrstrstr";
    const needle = "str";
    expect(strStr(haystack, needle)).toBe(3);
  });

  test("Needle is an empty string", () => {
    const haystack = "strstrstr";
    const needle = "";
    expect(strStr(haystack, needle)).toBe(0);
  });
});
