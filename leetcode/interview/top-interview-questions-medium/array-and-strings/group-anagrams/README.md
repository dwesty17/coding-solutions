## Problem

[Group Anagrams](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/)

## Solution

- Create an object that will contain each sorted word as the key, and the list of original words
- Iterate over the list of words...
  - Sort each word
  - Update the anagram map
- Return the values of the anagram map

## Improvements

We could optimize the solution by reducing the time we spend on each iteration. One way to do this might be to create some data structure to count the frequency of each letter in each word and using that to find anagrams. 