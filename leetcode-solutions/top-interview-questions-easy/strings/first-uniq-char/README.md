## Problem

[First Unique Character in a String](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/)

## Solution

Iterate over the string and create a frequency map of all the characters
in the string. Iterate over the string a second time and return the index
of the first character that has a frequency of 1 in the frequency map.
Return -1 if we make it to the end of the method without returning
anything else.
