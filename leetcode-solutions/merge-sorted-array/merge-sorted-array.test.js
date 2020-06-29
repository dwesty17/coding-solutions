const { merge } = require("./merge-sorted-array");

describe("merge", () => {
  test("Example test case 1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("Both inputs are empty", () => {
    const nums1 = [];
    const m = 0;
    const nums2 = [];
    const n = 0;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([]);
  });

  test("First input is empty", () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1]);
  });

  test("Second input is empty", () => {
    const nums1 = [1, 2, 3];
    const m = 3;
    const nums2 = [];
    const n = 0;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 3]);
  });



  test("Long test case", () => {
    const nums1 = [3, 3, 3, 6, 6, 6, 0, 0, 0, 0];
    const m = 6;
    const nums2 = [1, 2, 3, 4, 5];
    const n = 5;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6]);
  });
});
