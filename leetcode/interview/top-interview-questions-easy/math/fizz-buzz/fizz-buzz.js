// July 10, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
};

module.exports = { fizzBuzz };