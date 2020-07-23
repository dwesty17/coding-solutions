// July 23, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const anagramMap = {};
    strs.forEach((str) => {
        const sortedStr = str.split("").sort().join("");
        anagramMap[sortedStr] ? anagramMap[sortedStr].push(str) : anagramMap[sortedStr] = [ str ];
    });
    return Object.values(anagramMap);
};

module.exports = { groupAnagrams };