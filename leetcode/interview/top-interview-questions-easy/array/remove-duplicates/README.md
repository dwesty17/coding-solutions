## Problem 

[Remove Duplicates from Sorted Array](https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/)

## Solution

Iterate over the list of numbers from the end. If the current number equals the 
number after it, use splice to remove one of the duplicates. Return the length 
of the modified input.

## Caveat

`splice` is probably somewhat expensive, so it might increase the runtime of 
this solution.
