const { isBalanced } = require("./balanced-brackets");

describe("balanced-brackets", () => {
  test("Sample test case 0", () => {
    const testCases = [
      "{[()]}",
      "{[(])}",
      "{{[[(())]]}}",
    ];

    expect(isBalanced(testCases[0])).toBe("YES");
    expect(isBalanced(testCases[1])).toBe("NO");
    expect(isBalanced(testCases[2])).toBe("YES");
  });

  test("Sample test case 1", () => {
    const testCases = [
      "{{([])}}",
      "{{)[](}}",
    ];

    expect(isBalanced(testCases[0])).toBe("YES");
    expect(isBalanced(testCases[1])).toBe("NO");
  });

  test("Sample test case 2", () => {
    const testCases = [
      "{(([])[])[]}",
      "{(([])[])[]]}",
      "{(([])[])[]}[]",
    ];

    expect(isBalanced(testCases[0])).toBe("YES");
    expect(isBalanced(testCases[1])).toBe("NO");
    expect(isBalanced(testCases[2])).toBe("YES");
  });

  test("Test case 0", () => {
    const testCases = [
      "}][}}(}][))]",
      "[](){()}",
      "()",
      "({}([][]))[]()",
      "{)[](}]}]}))}(())(",
      "([[)",
    ];

    expect(isBalanced(testCases[0])).toBe("NO");
    expect(isBalanced(testCases[1])).toBe("YES");
    expect(isBalanced(testCases[2])).toBe("YES");
    expect(isBalanced(testCases[3])).toBe("YES");
    expect(isBalanced(testCases[4])).toBe("NO");
    expect(isBalanced(testCases[5])).toBe("NO");
  });
});
