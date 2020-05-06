# Solution

Iterate over the list of numbers from the end. If the current number equals the 
number after it, use splice to remove one of the duplicates. Return the length 
of the modified input.

## Caveat

`splice` is probably somewhat expensive, so it might increase the runtime of 
this solution.
