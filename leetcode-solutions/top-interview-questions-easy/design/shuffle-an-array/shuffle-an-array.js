// July 9, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/

class Solution {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.original = [...nums];
    }

    /**
     * Resets the array to its original configuration and return it.
     * @return {number[]}
     */
    reset() {
        return this.original;
    }

    /**
     * Returns a random shuffling of the array.
     * @return {number[]}
     */
    shuffle() {
        const copy = [...this.original];
        const solution = [];
        while (copy.length) {
            solution.push(copy.splice(getRandomInt(copy.length), 1));
        }
        return solution;
    }
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

module.exports = { Solution };