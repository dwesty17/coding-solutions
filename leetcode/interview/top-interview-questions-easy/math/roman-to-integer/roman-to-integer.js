// July 14, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/878/

const RomanNumeralValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let result = 0;
    let currIndex = 0;

    while (currIndex < s.length) {
        const currVal = RomanNumeralValue[s[currIndex]];
        const nextVal = RomanNumeralValue[s[currIndex + 1]];

        if (nextVal && nextVal > currVal) {
            result += nextVal - currVal;
            currIndex += 2;
        } else {
            result += currVal;
            currIndex++;
        }
    }

    return result;
};

module.exports = { romanToInt };