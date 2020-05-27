// May 27, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  const trimmedStr = str.replace(/^ +| +$/g, "");

  let unsignedResult = 0;
  const isNegative = trimmedStr[0] === "-";

  for (let i = 0; i < trimmedStr.length; i++) {
    if (i === 0 && [ "+", "-" ].includes(trimmedStr[i])) { continue; }

    if (/[^0-9]/.test(trimmedStr[i])) { break; }

    const newSinglesDigit = parseInt(trimmedStr[i]);
    unsignedResult = (unsignedResult * 10) + newSinglesDigit;

    if (isNegative && unsignedResult > 2147483648) {
      unsignedResult = 2147483648;
      break;
    }

    if (!isNegative && unsignedResult > 2147483647) {
      unsignedResult = 2147483647;
      break;
    }
  }

  return isNegative ? -unsignedResult : unsignedResult;
};

module.exports = { myAtoi };
