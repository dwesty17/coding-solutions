const { generate } = require("./pascals-triangle");

describe("generate", () => {
    test("Example test case 1", () => {
        expect(generate(5)).toEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
        ]);
    });

    test("Larger test case", () => {
        expect(generate(8)).toEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1],
            [1, 6, 15, 20, 15, 6, 1],
            [1, 7, 21, 35, 35, 21, 7, 1],
        ]);
    });

    test("Input 0", () => {
        expect(generate(0)).toEqual([]);
    });
});