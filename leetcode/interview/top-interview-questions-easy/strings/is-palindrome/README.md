## Problem

[Valid Palindrome](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/)

## Solution

This solution uses the split, reverse, and join methods to flip the string
around, so we can see if it's the same in either direction. It also uses a 
regular expression to remove non-alphanumeric characters from both versions of
the input. If the alphanumeric version of the of the forward and reversed
strings are equal then the input is a palindrome. Otherwise it's not. 
