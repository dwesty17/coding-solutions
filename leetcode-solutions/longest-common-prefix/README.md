## Problem

[Longest Common Prefix](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/)

## Solution

We'll start by assuming that the longest common prefix is equal to the first
string, or an empty string in the case of an empty array. We'll iterate over
the remaining strings building a new longest common prefix on every iteration
for each string, we will iterate over the letters of that string and of the 
current longest common prefix. For each iteration where the letters are the
same we will add them to the new solution. Once we reach two different letters
or the end of one of the strings we stop and move on to the next string.

## Thoughts

There may be a more efficient solution involving a trie.
