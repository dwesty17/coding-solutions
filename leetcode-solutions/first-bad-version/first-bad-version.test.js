const { solution } = require("./first-bad-version");

describe("solution", () => {
  test("Example test case 1", () => {
    const n = 5;
    const version = 4;

    const isBadVersion = jest.fn().mockImplementation((n) => n >= 4);

    expect(solution(isBadVersion)(n)).toBe(version);
  });

  test("First version is bad", () => {
    const n = 10;
    const version = 1;

    const isBadVersion = jest.fn().mockImplementation((n) => n >= 1);

    expect(solution(isBadVersion)(n)).toBe(version);
  });

  test("Last version is bad", () => {
    const n = 10;
    const version = 10;

    const isBadVersion = jest.fn().mockImplementation((n) => n >= 10);

    expect(solution(isBadVersion)(n)).toBe(version);
  });

  test("There's only one version", () => {
    const n = 1;
    const version = 1;

    const isBadVersion = jest.fn().mockImplementation((n) => n >= 1);

    expect(solution(isBadVersion)(n)).toBe(version);
  });

  test("There's only two versions", () => {
    const n = 2;
    const version = 2;

    const isBadVersion = jest.fn().mockImplementation((n) => n >= 2);

    expect(solution(isBadVersion)(n)).toBe(version);
  });

  test("There's only three versions", () => {
    const n = 3;
    const version = 2;

    const isBadVersion = jest.fn().mockImplementation((n) => n >= 2);

    expect(solution(isBadVersion)(n)).toBe(version);
  });
});
