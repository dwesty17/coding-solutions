## Problem

[Count And Stay](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/)

## Solution

This solution recursively builds each string from the string for the previous 
number. Once we reach the integer 1, we return "1". To build the new strings,
we iterate over the previous string and count sequential occurrences of each
number. Every time we encounter a new number (and once we finish iterating),
we append the count of the previously observed number and the number itself
to the result string.  
