const {threeSum} = require("./3-sum");

describe("threeSum", () => {
    test("Example test case 1", () => {
        const input = [-1, 0, 1, 2, -1, -4];
        const result = threeSum(input);

        expect(result).toHaveLength(2);
        expect(result).toContainEqual([-1, 0, 1]);
        expect(result).toContainEqual([-1, -1, 2]);
    });

    test("Large test case", () => {
        const input = [-1, 0, 1, 2, -1, -4, 10, -13, 4, 5, 6, -2, -5, -5, 0, 0, 1, 3, 4, -20, -30];
        const result = threeSum(input);

        expect(result).toHaveLength(16);
        expect(result).toContainEqual([-13,3,10]);
        expect(result).toContainEqual([-5,-5,10]);
        expect(result).toContainEqual([-5,-1,6]);
        expect(result).toContainEqual([-5,0,5]);
        expect(result).toContainEqual([-5,1,4]);
        expect(result).toContainEqual([-5,2,3]);
        expect(result).toContainEqual([-4,-2,6]);
        expect(result).toContainEqual([-4,-1,5]);
        expect(result).toContainEqual([-4,0,4]);
        expect(result).toContainEqual([-4,1,3]);
        expect(result).toContainEqual([-2,-1,3]);
        expect(result).toContainEqual([-2,0,2]);
        expect(result).toContainEqual([-2,1,1]);
        expect(result).toContainEqual([-1,-1,2]);
        expect(result).toContainEqual([-1,0,1]);
        expect(result).toContainEqual([0,0,0]);
    });

    test("Invalid length inputs", () => {
        expect(threeSum([])).toEqual([]);
        expect(threeSum([1])).toEqual([]);
        expect(threeSum([1, 2])).toEqual([]);
    });
});