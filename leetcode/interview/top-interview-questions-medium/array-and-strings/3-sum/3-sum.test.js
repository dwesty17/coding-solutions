const {threeSum} = require("./3-sum");

describe("threeSum", () => {
    test("Example test case 1", () => {
        const input = [-1, 0, 1, 2, -1, -4];
        const result = threeSum(input);

        expect(result).toHaveLength(2);
        expect(result).toContainEqual([-1, 0, 1]);
        expect(result).toContainEqual([-1, -1, 2]);
    });
});