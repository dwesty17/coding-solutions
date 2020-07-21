## Problem

[3 Sum](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/)

## Solution

Used [this discussion](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/discuss/281302/JavaScript-with-lots-of-explanatory-comments!) to find a working JS solution.

The solution pre-sorts the input in ascending order, and then iterates over all the negative 
elements. The number at each iteration is treated as the "fixed" value in the 3 sum, which
allows us to reduce the rest of the list to a two sum problem. 