// July 11, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
    let numPrimes = 0;
    for (let i = 1; i < n; i++) {
        isPrime(i) && numPrimes++;
    }
    return numPrimes;
};

const isPrime = (n) => {
    if (n < 2) { return false; }

    const squareRoot = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= squareRoot; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

module.exports = { countPrimes };