// July 4, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let result = 0;
    let lowPrice = prices[0];
    for (const price of prices) {
        if (price < lowPrice) {
            lowPrice = price;
        } else {
            result = Math.max(result, price - lowPrice);
        }
    }
    return result;
};

module.exports = { maxProfit };