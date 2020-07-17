const {reverseBits} = require("./reverse-bits");

describe("reverseBits", () => {
    test("Example test case 1", () => {
        expect(reverseBits(0b00000010100101000001111010011100)).toBe(0b00111001011110000010100101000000);
    });

    test("Example test case 2", () => {
        expect(reverseBits(0b11111111111111111111111111111101)).toBe(0b10111111111111111111111111111111);
    });
});