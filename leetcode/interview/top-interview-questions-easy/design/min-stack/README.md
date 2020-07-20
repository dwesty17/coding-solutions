## Problem

[Min Stack](https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/)

## Solution

In order to satisfy the constant-time requirement, internally our stack will will maintain two lists.
The first list will be the stack, which will support `push`, `pop`, and `top` in constant time. The
second list will contain the minimum value observed at each corresponding index of stack. This list
will allow us to easily find the minimum value in constant time.