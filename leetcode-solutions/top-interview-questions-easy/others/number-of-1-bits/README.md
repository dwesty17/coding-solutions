## Problem

[Number Of 1 Bits](https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/565/)

## Solution

Keep resetting input as the floor of itself divided by 2, until the input is 0. Increment a result counter for any iteration where the modulo of the current value is odd.
