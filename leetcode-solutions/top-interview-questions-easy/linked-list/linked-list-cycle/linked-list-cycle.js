// June 19, 2020
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/773/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let curr = head;

  while (curr) {
    if (curr.visited) { return true; }
    curr.visited = true;
    curr = curr.next;
  }

  return false;
};

module.exports = { hasCycle };
