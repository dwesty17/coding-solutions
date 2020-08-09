// August 5, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/784/

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
const oddEvenList = (head) => {
    if (!head) { return null; }

    let oddListPointer = new ListNode(null);
    let evenListPointer = new ListNode(null);

    let oddRunner = head;
    let evenRunner = head ? head.next : null;

    let currOddListNode = oddListPointer;
    let currEvenListNode = evenListPointer;

    while (oddRunner || evenRunner) {
        if (oddRunner) {
            currOddListNode.next = new ListNode(oddRunner.val, null);
            currOddListNode = currOddListNode.next;
            oddRunner = evenRunner ? evenRunner.next : null;
        }
        if (evenRunner) {
            currEvenListNode.next = new ListNode(evenRunner.val, null);
            currEvenListNode = currEvenListNode.next;
            evenRunner = oddRunner ? oddRunner.next : null;
        }
    }

    currOddListNode.next = evenListPointer.next;

    return oddListPointer.next;
};

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

module.exports = { oddEvenList };