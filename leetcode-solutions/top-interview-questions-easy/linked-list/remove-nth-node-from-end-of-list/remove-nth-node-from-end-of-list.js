// June 4, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthNodeFromEndOfList = (head, n) => {
  let listLength = 0;
  let currentNode = head;
  while (currentNode) {
    listLength++;
    currentNode = currentNode.next;
  }

  if (n === listLength) { return head.next; }

  currentNode = head;
  let currentNodeNum = 1;
  while(currentNode) {
    if (listLength - currentNodeNum === n) {
      currentNode.next = currentNode.next ? currentNode.next.next : null;
    }

    currentNodeNum++;
    currentNode = currentNode.next;
  }

  return head;
};

module.exports = { removeNthNodeFromEndOfList };
