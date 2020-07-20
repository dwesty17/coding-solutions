## Problem

[Palindrome Linked List](https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/)

## Solution

Convert the linked list into an array. Compare the array with the reversed 
version of itself. If they are the same return true, else return false. 

## Caveats

The current solution requires O(n) extra memory. In order to do it with O(1)
we'd need a solution that doesn't include allocating an extra array.
