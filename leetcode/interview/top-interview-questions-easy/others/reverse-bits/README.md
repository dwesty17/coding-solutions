## Problem

[Reverse Bits](https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/648/)

## Solution

- Convert the input integer to a string representing it's binary value, by using the `.toString` method with a radix argument of 2
- Reverse the string by splitting it into an array, reversing that, and joining it a new string
- Create an array of 0 bits missing from beginning of the string because we specifically want to use 32 bits
- Return the integer representation of our reversed string plus the padded 0 bits 

## Follow up

- Refresh my knowledge on binary and bitwise operations
- Learn more about the best way to manipulate bits in JS