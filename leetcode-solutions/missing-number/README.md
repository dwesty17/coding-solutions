## Problem

[Missing Number](https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/722/)

## Solution

- Initialize an array that is one element longer than the input, fill it with `false`
- Iterate over the input
  - For each number we observe, set the element in the boolean array to `true`
- Iterate over the boolean array and return the index of the first (and only false) element 