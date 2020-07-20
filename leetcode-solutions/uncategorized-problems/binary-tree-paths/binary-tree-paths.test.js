const { binaryTreePaths } = require("./binary-tree-paths");

describe("binary-tree-paths", () => {
  test("Example test case 1", () => {
    const tree = {
      val: 1,
      left: {
        val: 2,
        right: { val: 5 },
      },
      right: { val: 3 },
    };

    expect(binaryTreePaths(tree)).toEqual(["1->2->5", "1->3"]);
  });

  test("Empty test case", () => {
    expect(binaryTreePaths(null)).toEqual([]);
  });

  test("Just the root", () => {
    expect(binaryTreePaths({ val: 1 })).toEqual(["1"]);
  });
});
