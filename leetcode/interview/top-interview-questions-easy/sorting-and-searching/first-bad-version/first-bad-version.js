// June 29, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/

/**
 * Definition for isBadVersion()
 *
 * @param {number} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
  const memoizedResults = {};

  const findBadVersion = (currVersionToCheck, prevVersionChecked) => {
    const isCurrVersionBad = checkIsBadMemoized(currVersionToCheck);
    const isPriorVersionBad = currVersionToCheck > 1 && checkIsBadMemoized(currVersionToCheck - 1);

    if (isCurrVersionBad && !isPriorVersionBad) {
      return currVersionToCheck;
    }

    const diff = Math.abs(prevVersionChecked - currVersionToCheck);

    if (isCurrVersionBad && isPriorVersionBad) {
      const nextVersionToCheck = currVersionToCheck - Math.ceil(diff / 2);
      return findBadVersion(nextVersionToCheck, currVersionToCheck);
    }

    if (!isCurrVersionBad && !isPriorVersionBad) {
      const nextVersionToCheck = currVersionToCheck + Math.ceil(diff / 2);
      return findBadVersion(nextVersionToCheck, currVersionToCheck);
    }
  };

  const checkIsBadMemoized = (n) => {
    if (memoizedResults.hasOwnProperty(n)) {
      return memoizedResults[n];
    }

    const isBad = isBadVersion(n);
    memoizedResults[n] = isBad;
    return isBad;
  };

  /**
   * @param {number} n Total versions
   * @return {number} The first bad version
   */
  return (n) => {
    const currVersionToCheck = Math.floor((n + 1) / 2);

    return findBadVersion(currVersionToCheck, n);
  };
};

module.exports = { solution };
