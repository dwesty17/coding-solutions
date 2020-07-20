## Problem

[Reverse Integer](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/)

## Solution

Create a flag for whether or not the input is negative. Cast the absolute value
of the input into a string, split it into an array, reverse it, join it back
into a string. Cast the string back to a number and then return the positive or
negative version of the number based on the flag from the beginning of the 
solution.
