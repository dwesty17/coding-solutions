// July 24, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    if (!s) { return 0; }

    const lastIndexOfChar = {};
    lastIndexOfChar[s[0]] = 0;

    let result = 0;

    let windowStart = 0;
    let windowEnd = 1;

    let longestResultFromWindowStart = 1;

    while (windowEnd < s.length) {
        const endChar = s[windowEnd];
        if (lastIndexOfChar[endChar] >= windowStart) {
            result = Math.max(result, longestResultFromWindowStart);
            windowStart = lastIndexOfChar[endChar] + 1;
            longestResultFromWindowStart = windowEnd - windowStart + 1;
        } else {
            longestResultFromWindowStart++;
        }
        lastIndexOfChar[endChar] = windowEnd;
        windowEnd++;
    }

    result = Math.max(result, longestResultFromWindowStart);

    return result;
};

module.exports = { lengthOfLongestSubstring };