## Problem

[Binary Tree Inorder Traversal](https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/786/)

## Solution

- Initialize an empty array called `result`
- Recursively do a depth first search of the tree 
- For each iteration... 
  - Recursively traverse the left subtree if it exists
  - Push the current node value to a list we will return 
  - Recursively traverse the right sub-tree if it exists
- Return `result`