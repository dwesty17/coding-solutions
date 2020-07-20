## Problem

[Best Time to Buy and Sell Stock II](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/)

## Solution

Iterate over the list of prices and for every price execute two different 
pieces of logic based on whether or not you already own a stock. If you
don't own a stock and today's price is cheaper than tomorrows, then buy
the stock today. If you do own a stock and you can make more of a profit
by selling today than you can by selling tomorrow, sell your stock.

## Edge cases

- You still own stock on the last day - make sure you sell it
- You own a stock worth zero - don't confuse this for not owning a stock
