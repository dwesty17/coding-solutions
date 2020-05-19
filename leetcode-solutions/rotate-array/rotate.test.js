const { rotate } = require("./rotate");

describe("rotate", () => {
  test("Example test case 1", () => {
    const nums = [ 1, 2, 3, 4, 5, 6, 7 ];
    const k = 3;
    rotate(nums, k);
    expect(nums).toEqual([ 5, 6, 7, 1, 2, 3, 4 ]);
  });

  test("Example test case 2", () => {
    const nums = [ -1, -100, 3, 99 ];
    const k = 2;
    rotate(nums, k);
    expect(nums).toEqual([ 3, 99, -1, -100 ]);
  });

  test("k is 0", () => {
    const nums = [ 1, 2, 3, 4, 5 ];
    const k = 0;
    rotate(nums, k);
    expect(nums).toEqual([ 1, 2, 3, 4, 5 ]);
  });

  test("k is the same as nums.length", () => {
    const nums = [ 1, 2, 3, 4, 5 ];
    const k = 5;
    rotate(nums, k);
    expect(nums).toEqual([ 1, 2, 3, 4, 5 ]);
  });

  test("k is greater than nums.length", () => {
    const nums = [ 1, 2, 3, 4, 5 ];
    const k = 6;
    rotate(nums, k);
    expect(nums).toEqual([ 5, 1, 2, 3, 4 ]);
  });

  test("nums is empty", () => {
    const nums = [];
    const k = 2;
    rotate(nums, k);
    expect(nums).toEqual([]);
  });
});
