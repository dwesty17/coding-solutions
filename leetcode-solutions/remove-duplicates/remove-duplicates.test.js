const { removeDuplicates } = require("./remove-duplicates");

describe("remove-duplicates", () => {
  test("Sample test case 0", () => {
    const list = [ 1, 1, 2 ];
    expect(removeDuplicates(list)).toBe(2);
    expect(list).toEqual([ 1, 2 ]);
  });

  test("Sample test case 1", () => {
    const list = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
    expect(removeDuplicates(list)).toBe(5);
    expect(list).toEqual([ 0, 1, 2, 3, 4 ]);
  });
});
