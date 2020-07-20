// June 14, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseLinkedList = (head) => {
  let prevNode = null;
  let currNode = head;
  let nextNode = head;

  while (nextNode) {
    currNode = nextNode;
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
  }

  head = currNode;

  return head;
};

module.exports = { reverseLinkedList };
