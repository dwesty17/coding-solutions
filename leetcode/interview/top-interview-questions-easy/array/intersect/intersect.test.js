const { intersect } = require("./intersect");

describe('intersect', () => {
  test("Example test case 1", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    expect(intersect(nums1, nums2).sort(ascending)).toEqual([2, 2]);
  });

  test("Example test case 2", () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    expect(intersect(nums1, nums2).sort(ascending)).toEqual([4, 9]);
  });

  test("Both inputs are empty", () => {
    const nums1 = [];
    const nums2 = [];
    expect(intersect(nums1, nums2).sort(ascending)).toEqual([]);
  });

  test("One input is empty", () => {
    const nums1 = [];
    const nums2 = [3, 4, 5];
    expect(intersect(nums1, nums2).sort(ascending)).toEqual([]);
  });
});

const ascending = (a, b) => a - b;
