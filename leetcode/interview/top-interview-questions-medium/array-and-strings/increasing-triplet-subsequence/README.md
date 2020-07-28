## Problem

[Increasing Triplet Subsequence](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/)

## Solution

- Initialize two variables, one for the lowest number we've seen so far and one for the second lowest number we've seen so far
- Set both variables to the highest number possible
- Iterate over the list of numbers
  - If the current number is less than or equal to the smallest number, update the smallest number
  - Else if the current number is less than or equal to the second smallest, update the second smallest number
  - Else return true
- Return false if we finish iterating without returning true