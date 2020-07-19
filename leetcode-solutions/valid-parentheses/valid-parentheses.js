// July 19, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/

const OpeningBracket = {
    "(": ")",
    "{": "}",
    "[": "]",
};

const ClosingBracket = {
    ")": "(",
    "}": "{",
    "]": "[",
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const bracketList = s.split("");
    const openBrackets = [];

    for (const bracket of bracketList) {
        if (!!OpeningBracket[bracket]) {
            openBrackets.unshift(bracket);
        } else if (!!ClosingBracket[bracket] && openBrackets[0] === ClosingBracket[bracket]) {
            openBrackets.shift();
        } else {
            return false;
        }
    }

    return !openBrackets.length;
};

module.exports = { isValid };