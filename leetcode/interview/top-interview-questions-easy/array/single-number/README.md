## Problem

[Single Number](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/)

## Solution

Iterate over the array. Keep a map of numbers that have been observed exactly 
once. So, when a number is observed for the first time we should add a new 
property to the object to represent that. When we observe a number that is 
already in the map, we should remove the key for that number. Once we are done
iterating over the list there should only be one key left in the map, which is
the number that only appears once.

## Caveats

- This solution uses extra memory for the object. We should be able to do better than O(n) memory.

## Thoughts

You could sort the list find the single element without allocating extra space.
You would either have to find the element that doesn't have an equal number on 
either side, or you could alternate between adding and subtracting the numbers
to a sum, which would contain the value of the single element by the end. Both
of these solutions require no extra memory, but have non-linear runtime complexity. 
