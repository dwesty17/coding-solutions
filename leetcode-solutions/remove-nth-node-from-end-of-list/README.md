## Problem

[Remove Nth Node From End of List](https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/)

## Solution

Get the length of the list by iterating over it once. Iterate over it again, 
and stop when you are n nodes away from the end. Remove the node you're at by
setting the pointer of the previous node to the value of the next node.
