## Problem

[Binary Tree Zigzag Level Order Traversal](https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/787/)

## Solution

- Traverse the tree level by level from right to left using a breadth first search
- For each node...
  - If the level of the current node is odd append it's left and right children to the beginning of the return list
  - If the level of the current node is even append it's left and right children to the end of the return list
  
## Notes

- Got incorrect submission first time because I forgot to test empty tree case