// August 12, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/786/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
    const result = [];

    const buildInOrderList = (node) => {
        node.left && buildInOrderList(node.left);
        result.push(node.val);
        node.right && buildInOrderList(node.right);
    };

    root && buildInOrderList(root);

    return result;
};

module.exports = { inorderTraversal };