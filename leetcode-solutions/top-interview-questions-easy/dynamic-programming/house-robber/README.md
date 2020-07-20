## Problem

[House Robber](https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/)

## Solution

If we consider a street with three houses, we know that we will always want to choose the two outside houses or the
inside house depending on which of those has more money. With this knowledge we can continually simplify the solution
to three numbers. The value of the current house we are considering, the maximum value of the previous house, and the
maximum value of the house before the previous house. We can initialize the last two values to be the value of the first
and second houses respectively. 

Then we can iterate over the houses starting with the third. For each new house we set it's maximum value to be the 
value of the current house plus the value of the house two behind it OR the maximum value of the house before it.
We choose whichever amount is greater. When we finish iterating we return either the maximum value of the last house OR
the maximum value of the second to last house. We return whichever amount is greater.
