// June 18, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/

// Solutions
// 1. Time: O(n), Space: O(n); Turn linked list into an array, join the elements of the list, see if the result is equal to it's reverse
// 2. Time: O(n), Space: O(1); We would need to know the length of the list and probably have two pointers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  const listAsArray = [];
  let currNode = head;

  while (currNode) {
    listAsArray.push(currNode.val);
    currNode = currNode.next;
  }

  return listAsArray.join("") === listAsArray.reverse().join("");
};

module.exports = { isPalindrome };
