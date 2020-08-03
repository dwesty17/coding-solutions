// July 29, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/783/

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
const addTwoNumbers = (l1, l2) => {
    const root = new ListNode(0);
    let currNode = root;

    let carryOver = 0;
    while (l1 || l2 || carryOver) {
        const num1 = l1 ? l1.val : 0;
        const num2 = l2 ? l2.val : 0;

        const sum = num1 + num2 + carryOver;

        const currDigitSum = sum % 10;
        carryOver = Math.floor(sum / 10);

        currNode.next = new ListNode(currDigitSum);

        if (l1) { l1 = l1.next; }
        if (l2) { l2 = l2.next; }
        currNode = currNode.next;
    }

    return root.next;
};

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

module.exports = { addTwoNumbers };