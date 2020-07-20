// July 16, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/762/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let distance = 0;

    while(x !== y) {
        if (x % 2 !== y % 2) { distance++; }
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
    }

    return distance;
};

module.exports = { hammingDistance };