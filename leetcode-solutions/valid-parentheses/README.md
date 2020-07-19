## Problem

[Valid Parentheses](https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/)

## Solution

- Split the input string into an array of individual characters
- Iterate over the array of characters...
    - If we observe and invalid character return false immediately
    - Push any open brackets to a stack of open brackets
    - If we observe a closing bracket
        - Return false immediately if the top of the stack isn't the corresponding open bracket
        - Otherwise, pop the top element off the stack and continue
- Return true if we iterate over the whole array of characters without any issue and there are not any unclosed brackets

## Note

I got this during a phone screen with Palantir in 2016.