## Problem

[Longest Palindromic Substring](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/780/)

## Solution

We can find the longest palindromic substring by finding the longest palindrome around each index.

- Iterate over every character in the string
- Find the longest palindrome around that character by expanding outwards in every direction