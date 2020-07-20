const { missingNumber } = require("./missing-number");

describe("missingNumber", () => {
    test("Example test case 1", () => {
        const input = [3, 0, 1];
        expect(missingNumber(input)).toBe(2);
    });

    test("Example test case 2", () => {
        const input = [9, 6, 4, 2, 3, 5, 7, 0, 1];
        expect(missingNumber(input)).toBe(8);
    });

    test("Input is empty array", () => {
        const input = [];
        expect(missingNumber(input)).toBe(0);
    });

    test("Missing number is 0", () => {
        expect(missingNumber([1])).toBe(0);
        expect(missingNumber([3, 4, 2, 1])).toBe(0);
    });
});