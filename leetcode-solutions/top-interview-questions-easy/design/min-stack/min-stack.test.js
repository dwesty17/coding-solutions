const {MinStack} = require("./min-stack");

describe("MinStack", () => {
    test("Example test case 1", () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);

        expect(minStack.getMin()).toBe(-3);

        minStack.pop();

        expect(minStack.top()).toBe(0);
        expect(minStack.getMin()).toBe(-2);
    });

    test("First test case works even if we call pop, top, and getMin a bunch of times for no reason", () => {
        const minStack = new MinStack();

        expect(minStack.pop()).toBeUndefined();
        expect(minStack.pop()).toBeUndefined();
        expect(minStack.top()).toBeUndefined();
        expect(minStack.top()).toBeUndefined();
        expect(minStack.getMin()).toBeUndefined();
        expect(minStack.getMin()).toBeUndefined();
        expect(minStack.pop()).toBeUndefined();
        expect(minStack.top()).toBeUndefined();
        expect(minStack.getMin()).toBeUndefined();

        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);

        expect(minStack.getMin()).toBe(-3);

        minStack.pop();

        expect(minStack.top()).toBe(0);
        expect(minStack.getMin()).toBe(-2);
    });

    test("Failed test case number 1", () => {
        const minStack = new MinStack();

        minStack.push(0);
        minStack.push(1);
        minStack.push(0);

        expect(minStack.getMin()).toBe(0);

        minStack.pop();

        expect(minStack.getMin()).toBe(0);
    });
});