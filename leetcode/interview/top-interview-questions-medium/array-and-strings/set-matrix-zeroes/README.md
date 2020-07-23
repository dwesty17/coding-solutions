## Problem

[Set Matrix Zeroes](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/)

## Solution

This solution requires two passes over all of the elements in the list. It has O(mn) time complexity and O(m+n) space complexity.

- Create a map of `m` indices and another of `n` indices to store all the indices that should be set to zero 
- On the first iteration over all of the elements...
  - If an element is 0 add it's indices to the respective maps
  - Otherwise continue
- On the second iteration over all of the elements...
  - If either the m or n index is in either of the maps set the element to zero
  - Otherwise continue
