## Problem

[Intersection Of Two Linked Lists](https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/785/)

## Solution

- Iterate over both lists individually to figure out their length
- Iterate over both together...
  - Start with the head of the shorter list
  - Start `diff` past the head of the longer list where `diff` is the difference between the length of the two lists
  - At each iteration compare the nodes for equality
  - If you observe two equivalent nodes return that node
  - If you iterate past the end of both lists return null