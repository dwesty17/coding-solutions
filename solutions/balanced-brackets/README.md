# Solution

Split the string into a list of brackets. Iterate over each bracket. 
If the bracket is an opening bracket push it to a stack of currently 
open brackets. If the bracket is a closing bracket pop the last open 
bracket off the stack. Move onto the next bracket if this pair matches 
otherwise return "NO" immediately. Once we are done iterating return 
"NO" if there are still open brackets, otherwise return "YES".

## Edge Cases

- The input string could contain invalid characters like "%", in which case `isBalanced` throws an error
