const { isPalindrome } = require("./is-palindrome");

describe("isPalindrome", () => {
  test("Example test case 1", () => {
    const input = "A man, a plan, a canal: Panama";
    expect(isPalindrome(input)).toBe(true);
  });

  test("Example test case 2", () => {
    const input = "race a car";
    expect(isPalindrome(input)).toBe(false);
  });

  test("Empty string", () => {
    const input = "";
    expect(isPalindrome(input)).toBe(true);
  });
});
