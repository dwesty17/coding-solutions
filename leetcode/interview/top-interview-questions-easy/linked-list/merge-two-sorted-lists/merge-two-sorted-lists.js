// June 15, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let curr = { next: null };
  const head = curr;

  while (l1 || l2) {
    if (l1 && !l2) {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    } else if (l2 && !l1) {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    } else if (l1.val <= l2.val) {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    }
  }

  return head.next;
};

module.exports = { mergeTwoLists };
