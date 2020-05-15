## Problem

[Two Sum](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/)

## Clarifying Questions

- Is the list sorted like in the example?
- Can the list contain negative integers?

## Solution

We're going to iterate over the list two times. 

On the first iteration we will create a map of the indices of all of the 
elements in the list keeping in mind that there may be duplicate entries in the
list. Therefore, the keys of the map will represent an integer in the input 
list and the value will be an array of indices that integer exists at. We 
should maintain the indices map in descending order to make our jobs during the
second iteration a little easier.

On the second iteration we will iterate over the list again. We will subtract
the target by each number in the list. We'll check our indices map to see if
there are any occurrences of the desired counterpart in our list. If there are
we will additionally check that the first observed index isn't the same as the
index we are currently looking at.

Because we're iterating from the beginning of the list and the arrays in the 
indices map are sorted in reverse order we know that we only have to compare
the index we're currently at in the second loop to the first element in the
list we get back from the indices map.
