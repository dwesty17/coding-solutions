// July 13, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
  let nextPower = 0;
  let closestPowerOfThree = Math.pow(3, nextPower);

  while (closestPowerOfThree < n) {
    nextPower++;
    closestPowerOfThree = Math.pow(3, nextPower);
  }

  return closestPowerOfThree === n;
};

module.exports = { isPowerOfThree };
