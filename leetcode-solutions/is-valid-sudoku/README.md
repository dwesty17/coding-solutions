## Problem

[Valid Sudoku](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/)

## Solution

My solution will iterate over all the elements in the board one time. While 
it's iterating over the board, it will maintain a data structure indicating 
which numbers have already been seen in each row, column, and subgroup. The
first time we see a duplicate, we'll return false. If we get to the end of
the board without having returned false, we will return true.

## Improvements

Don't be lazy and use math to calculate the subgroup index. 
