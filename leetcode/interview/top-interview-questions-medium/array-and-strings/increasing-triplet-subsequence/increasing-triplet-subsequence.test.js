const { increasingTriplet } = require("./increasing-triplet-subsequence");

describe("increasingTriplet", () => {
    test("Example test case 1", () => {
        const input = [ 1, 2, 3, 4, 5 ];
        expect(increasingTriplet(input)).toBe(true);
    });

    test("Example test case 2", () => {
        const input = [ 5, 4, 3, 2, 1 ];
        expect(increasingTriplet(input)).toBe(false);
    });

    test("Empty input", () => {
        const input = [];
        expect(increasingTriplet(input)).toBe(false);
    });

    test("Random falsy test case", () => {
        const input = [ 10, 9, 11, 8, 7, 6, 4, 3, 5 ];
        expect(increasingTriplet(input)).toBe(false);
    });

    test("Random truthy test case", () => {
        const input = [ 1, 2, 1, 3, 2, 10, 9, 11, 12 ];
        expect(increasingTriplet(input)).toBe(true);
    });

    test("Non-consecutive increasing sub-sequence in list", () => {
        const input = [ 10, 1, 12, 2, 2, 13 ];
        expect(increasingTriplet(input)).toBe(true);
    });

    test("Failed test case 1", () => {
        const input = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
        expect(increasingTriplet(input)).toBe(false);
    });
});