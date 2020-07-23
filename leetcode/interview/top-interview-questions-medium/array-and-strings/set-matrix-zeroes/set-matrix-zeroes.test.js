const { setZeroes } = require("./set-matrix-zeroes");

describe("setZeroes", () => {
    test("Example test case 1", () => {
        const input = [
            [ 1, 1, 1 ],
            [ 1, 0, 1 ],
            [ 1, 1, 1 ],
        ];
        setZeroes(input);
        expect(input).toEqual([
            [ 1, 0, 1 ],
            [ 0, 0, 0 ],
            [ 1, 0, 1 ],
        ]);
    });

    test("Example test case 2", () => {
        const input = [
            [ 0, 1, 2, 0 ],
            [ 3, 4, 5, 2 ],
            [ 1, 3, 1, 5 ],
        ];
        setZeroes(input);
        expect(input).toEqual([
            [ 0, 0, 0, 0 ],
            [ 0, 4, 5, 0 ],
            [ 0, 3, 1, 0 ],
        ]);
    });

    test("Empty matrix", () => {
        const input = [];
        setZeroes(input);
        expect(input).toEqual([]);
    });

    test("No zeros in input", () => {
        const input = [
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
        ];
        setZeroes(input);
        expect(input).toEqual([
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
            [ 1, 2, 3, 4 ],
        ]);
    });

    test("Input is just a column", () => {
        const input = [
            [ 5 ],
            [ 9 ],
            [ 0 ],
            [ 7 ],
            [ 8 ],
        ];
        setZeroes(input);
        expect(input).toEqual([
            [ 0 ],
            [ 0 ],
            [ 0 ],
            [ 0 ],
            [ 0 ],
        ]);
    })
});