## Problem

[Roman To Integer](https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/878/)

## Solution

- Create a map from Roman Numeral character to decimal value
- Split the Roman Numeral string into individual characters
- Initialize our result to 0
- Iterate over the list...
  - If the next character represents a larger decimal than the current character subtract the current the next value and add that result to our running total
  - Otherwise add the current value to our running total 
- Return the result

## Note

I got this as a question from Facebook during a phone interview in 2019