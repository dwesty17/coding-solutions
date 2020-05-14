## Problem

[Plus One](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/)

## Solution

Iterate over the list from the end. Add 1 to each digit. If the result of the
addition is 10, carry over the 1 to the next digit. If you still have carry
over by the end, push another 1 to front of the array.
