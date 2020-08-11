// August 10, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/785/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let aPointer = headA;
    let bPointer = headB;

    let aListLength = 0;
    let bListLength = 0;

    while (aPointer) {
        aListLength++;
        aPointer = aPointer.next;
    }

    while (bPointer) {
        bListLength++;
        bPointer = bPointer.next;
    }

    let diff = bListLength - aListLength;

    aPointer = headA;
    bPointer = headB;

    while (diff) {
        if (diff > 0) {
            bPointer = bPointer.next;
            diff--;
        } else if (diff < 0) {
            aPointer = aPointer.next;
            diff++;
        }
    }

    while (aPointer && bPointer) {
        if (aPointer === bPointer) {
            return aPointer;
        }

        aPointer = aPointer.next;
        bPointer = bPointer.next;
    }
};

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

module.exports = { getIntersectionNode };