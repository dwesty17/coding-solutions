const { myAtoi } = require("./my-atoi");

describe("myAtoi", () => {
  test("Example test case 1", () => {
    const input = "42";
    expect(myAtoi(input)).toBe(42);
  });

  test("Example test case 2", () => {
    const input = "   -42";
    expect(myAtoi(input)).toBe(-42);
  });

  test("Example test case 3", () => {
    const input = "4193 with words";
    expect(myAtoi(input)).toBe(4193);
  });

  test("Example test case 4", () => {
    const input = "words and 987";
    expect(myAtoi(input)).toBe(0);
  });

  test("Example test case 5", () => {
    const input = "-91283472332";
    expect(myAtoi(input)).toBe(-2147483648);
  });

  test("Number starts with a plus sign", () => {
    const input = "+5";
    expect(myAtoi(input)).toBe(5);
  });

  test("Number contains spaces on both sides", () => {
    const input = "       5       ";
    expect(myAtoi(input)).toBe(5);
  });

  test("Number string contains newlines", () => {
    const input = "\n\n5";
    expect(myAtoi(input)).toBe(0);
  });

  test("Number has leading zeros", () => {
    const input = "000005";
    expect(myAtoi(input)).toBe(5);
  });

  test("Failed test case", () => {
    const input = "   +0 123";
    expect(myAtoi(input)).toBe(0);
  });
});
