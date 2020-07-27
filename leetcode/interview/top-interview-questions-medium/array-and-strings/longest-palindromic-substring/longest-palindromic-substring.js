// July 27, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/780/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let start = i - 1;
        let end = i + 1;
        let localResult = s[i];
        const charSet = new Set(s[i]);

        while (start >= 0 || end < s.length) {
            if (s[start] === s[end]) {
                localResult = `${s[start]}${localResult}${s[end]}`;
                charSet.add(s[start]);
                charSet.add(s[end]);
                start--;
                end++;
            } else if (charSet.size === 1 && charSet.has(s[start])) {
                localResult = `${s[start]}${localResult}`;
                start--;
            } else if (charSet.size === 1 && charSet.has(s[end])) {
                localResult = `${localResult}${s[end]}`;
                end++;
            } else {
                break;
            }
        }

        if (localResult.length > result.length) {
            result = localResult;
        }
    }

    return result;
};

module.exports = { longestPalindrome };