const { countAndSay } = require("./count-and-say");

describe("countAndSay", () => {
  test("Example test case 1 (n = 1)", () => {
    const input = 1;
    expect(countAndSay(input)).toBe("1");
  });

  test("n = 2", () => {
    const input = 2;
    expect(countAndSay(input)).toBe("11");
  });

  test("n = 3", () => {
    const input = 3;
    expect(countAndSay(input)).toBe("21");
  });

  test("Example test case 2 (n = 2)", () => {
    const input = 4;
    expect(countAndSay(input)).toBe("1211");
  });

  test("n = 5", () => {
    const input = 5;
    expect(countAndSay(input)).toBe("111221");
  });

  test("n = 6", () => {
    const input = 6;
    expect(countAndSay(input)).toBe("312211");
  });

  test("n = 7", () => {
    const input = 7;
    expect(countAndSay(input)).toBe("13112221");
  });

  test("n = 8", () => {
    const input = 8;
    expect(countAndSay(input)).toBe("1113213211");
  });

  test("n = 9", () => {
    const input = 9;
    expect(countAndSay(input)).toBe("31131211131221");
  });

  test("n = 10", () => {
    const input = 10;
    expect(countAndSay(input)).toBe("13211311123113112211");
  });
});
