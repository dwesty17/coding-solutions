## Problem

[Rotate Array](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/)

## Solution

Create a new of all the elements array from the index 
`nums.length - (k % nums.length)` to the end of list. Add the remaining
elements to the end of the new array in their original order. Reassign
the new array to the old array.

## Caveat

This solution using O(n) space because it requires a new array. This problem
is possible to solve without creating a new array. 
