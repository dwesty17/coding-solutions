## Problem

[String to Integer (atoi)](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/)

## Solution

The solution will create a new trimmed version of the string and initialize 
the result to 0 before starting to parse the input. Then it will parse each
character of the trimmed string building the result one character at a time. 

On the first iteration only, we will check whether the character is a + or -. 
If it is we will update an `isNegative` flag accordingly. 

If we encounter a character that's not a number we'll break out of the loop and 
return the result. If at any point our result falls outside of the allowable 
range we should return the minimum and maximum value. Once the solution reaches
the end of the string, assuming it hasn't broken out of the loop early, it
returns the resulting number.  
