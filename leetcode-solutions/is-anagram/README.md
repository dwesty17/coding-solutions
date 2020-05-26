## Problem

[Valid Anagram](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/)

## Solution

Iterate over the first string and create a frequency map. Iterate over the
second string. Subtract from the original frequency map. Delete any keys
that have a value of zero. If you encounter a character that isn't in the 
frequency map or the map still contains entries by the end, return false.
Otherwise, return true.
