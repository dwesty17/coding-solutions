## Problem

[Count Primes](https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/)

## Solution

First we need to figure out how to check if a number is prime. To do this, we can iterate from 2 to the square root of
the number seeing if the number is evenly divisible by anything. If we find any numbers that divide the number in
question evenly we know that the number in question is not prime, otherwise it is.

To count the number of primes less than our input, we iterate over each number and check if it's prime. We'll increment
a counter if it is and move on. 

## Better Solution?

This solution requires O(sqrt(N)) for each number less than our input, which means the overall time complexity of the
solution is O(n * sqrt(n)). Maybe you can improve it with some pre-computation. By using the sieve of Eratosthenes
algorithm in advance you can achieve a liner time complexity for some finite set of numbers. You could also, make
a space versus time trade-off to achieve a constant time solution for a finite set of numbers. 