## Problem

[Longest Substring Without Repeating Characters](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/)

## Solution

We're going to use a sliding window approach to find the longest substring without repeating characters starting at each index. Then we simply return the length of the longest of those substrings.

- Initialize a map from character to the most recent index we observed it at
- Initialize the starting (`s`) and ending (`e`) index of our sliding window and set them to 0 and 1 respectively
- Initialize a variable to track the result as well as one to track the longest possible string for each `s` we look at 
- Keep iterating while `e` is less than length of the input string
  - If the character at index `e` has not been observed between index `s` and `e`... 
    - Increment the longest possible substring without repeating characters that starts at index `s`
  - Otherwise... 
    - Set the result to the max of itself and longest possible string at `s`
    - Update `s` to be one greater than the value for the character in our map
    - Set the longest possible string starting at `s` to be `e - 2`
  - Update our character map for the value at `e`
  - Increment `e`
- Return the result

## Todo

Work on more problems that involve a sliding window.