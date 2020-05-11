## Problem

[Contains Duplicates](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/)

## Solution

While iterating over the input maintain a dictionary of numbers that have 
already been observed. When you see a number you've already seen return true.
If you never see one then return false.

