// May 29, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (n === 1) {
    return "1";
  }

  return generateNextSequence(countAndSay(n - 1));
};

const generateNextSequence = (prevSeq) => {
  let nextSequence = "";

  let currentNum = prevSeq[0];
  let currentNumCount = 1;

  for (let i = 1; i < prevSeq.length; i++) {
    if (prevSeq[i] === currentNum) {
      currentNumCount++;
    } else {
      nextSequence = `${nextSequence}${currentNumCount}${currentNum}`;
      currentNum = prevSeq[i];
      currentNumCount = 1;
    }
  }

  return `${nextSequence}${currentNumCount}${currentNum}`;
};

module.exports = { countAndSay };
