## Problem

[Rotate Image](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/)

## Solution

Each element in the 2D array is going to rotate clockwise one edge. We can pick
any element and do a 4 way swap with the 3 elements in the same position on the
3 other edges. This will allow us to do the whole rotation in-place without 
allocating memory for another array. The solution starts in the top left corner
and work our way towards the center of the square one layer at a time. For each
layer we start with the top left element and iterate to the second to last 
element. For each element we do a 4 way swap.
