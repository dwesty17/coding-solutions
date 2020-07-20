const { rob } = require("./house-robber");

describe("rob", () => {
  test("Example test case 1", () => {
    const nums = [1, 2, 3, 1];
    expect(rob(nums)).toBe(4);
  });

  test("Example test case 1", () => {
    const nums = [2, 7, 9, 3, 1];
    expect(rob(nums)).toBe(12);
  });

  test("Trivial cases", () => {
    const nums1 = [];
    expect(rob(nums1)).toBe(0);

    const nums2 = [5];
    expect(rob(nums2)).toBe(5);
  });

  test("Only two houses", () => {
    const nums1 = [2, 3];
    expect(rob(nums1)).toBe(3);

    const nums2 = [3, 2];
    expect(rob(nums2)).toBe(3);
  });

  test("Three houses with lowest number first", () => {
    const nums = [2, 3, 4];
    expect(rob(nums)).toBe(6);
  });

  test("Four houses", () => {
    const nums = [2, 3, 4, 5];
    expect(rob(nums)).toBe(8);
  });

  test("Five houses", () => {
    const nums = [2, 3, 4, 3, 7];
    expect(rob(nums)).toBe(13);
  });

  test("Failed test case 1", () => {
    const nums = [2, 1, 1, 2];
    expect(rob(nums)).toBe(4);
  });
});
