const {isValid} = require("./valid-parentheses");

describe("isValid", () => {
    test("Example test case 1", () => {
        expect(isValid("()")).toBe(true);
    });

    test("Example test case 2", () => {
        expect(isValid("()[]{}")).toBe(true);
    });

    test("Example test case 3", () => {
        expect(isValid("(]")).toBe(false);
    });

    test("Example test case 4", () => {
        expect(isValid("([)]")).toBe(false);
    });

    test("Example test case 5", () => {
        expect(isValid("{[]}")).toBe(true);
    });

    test("Empty string", () => {
        expect(isValid("")).toBe(true);
    });

    test("Invalid input", () => {
        expect(isValid("[00]")).toBe(false);
    });

    test("Failed case", () => {
        expect(isValid("[")).toBe(false);
    });
});