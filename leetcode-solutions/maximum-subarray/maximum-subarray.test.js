const {maxSubArray} = require("./maximum-subarray");

describe("maxSubArray", () => {
    test("Example test case 1", () => {
        const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        expect(maxSubArray(nums)).toBe(6);
    });

    test("Empty input", () => {
        const nums = [];
        expect(maxSubArray(nums)).toBe(-2147483648);
    });

    test("All positive", () => {
        const nums = [1, 2, 5, 3];
        expect(maxSubArray(nums)).toBe(11);
    });

    test("All negative", () => {
        const nums = [-2, -1, -5, -10];
        expect(maxSubArray(nums)).toBe(-1);
    });

    test("Strictly increasing", () => {
        const nums = [-1, -2, 0, 1, 2, 3];
        expect(maxSubArray(nums)).toBe(6);
    });

    test("Strictly decreasing", () => {
        const nums = [2, 1, 0, -1, -2];
        expect(maxSubArray(nums)).toBe(3);
    });

    test("Alternating positive and negative where max sum is the aum of the whole array", () => {
        const nums = [2, -1, 1, 2, 1, -2, -1, 2, 3, -1, 2];
        expect(maxSubArray(nums)).toBe(8);
    });

    test("Two local maximums with a huge negative number in the middle", () => {
        const nums = [4, -2, 1, 3, -100, 10];
        expect(maxSubArray(nums)).toBe(10);
    });
});