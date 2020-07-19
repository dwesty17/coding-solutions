## Problem

[Pascals Triangle](https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/)

## Solution

- Create an empty array
- Iterate from 0 to 1 less than the input...
    - Push a new empty array to our original array
    - Iterate from 0 to the value of the current iteration
        - Push 1 to the inner array if we are on the first or last iteration of the inner loop
        - Otherwise, push the sum of the elements at the same and previous indices of the previous inner array
        
This solution is O(n<sup>2</sup>) time and space complexity. 