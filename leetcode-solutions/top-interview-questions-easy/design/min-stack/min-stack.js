// July 10, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/

class MinStack {
    /**
     * initialize your data structure here.
     */
    constructor () {
        this.stack = [];
        this.minValue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push (x) {
        this.stack.push(x);

        const nextMin = Math.min(x, this.minValue.length ? this.minValue.slice(-1)[0] : Infinity);
        this.minValue.push(nextMin);
    }

    /**
     * @return {void}
     */
    pop () {
        this.stack.pop();
        this.minValue.pop();
    }

    /**
     * @return {number}
     */
    top () {
        return this.stack.slice(-1)[0];
    }

    /**
     * @return {number}
     */
    getMin () {
        return this.minValue.slice(-1)[0];
    }
}

module.exports = { MinStack };