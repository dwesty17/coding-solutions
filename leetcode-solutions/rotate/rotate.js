// May 6, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/**
 * @param {number[]} prices
 * @return {number}
 */
const rotate = (prices) => {
  let profit = 0;
  let ownedStockPrice = -1;
  for (let i = 0; i < prices.length; i++) {
    const currentStockPrice = prices[i];
    const nextStockPrice = prices[i + 1];

    if (ownedStockPrice < 0 && nextStockPrice > currentStockPrice) {
      ownedStockPrice = currentStockPrice;
    } else if (
      ownedStockPrice >= 0 &&
      (currentStockPrice > nextStockPrice || nextStockPrice === undefined)
    ) {
      profit += prices[i] - ownedStockPrice;
      ownedStockPrice = -1;
    }
  }
  return profit;
};

module.exports = { maxProfit: rotate };
