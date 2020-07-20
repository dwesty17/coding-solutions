// June 21, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

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
 * @return {boolean}
 */
const isValidBST = (root) => {
  return checkBST(root);
};

const checkBST = (node, min = -Infinity, max = Infinity) => {
  if (!node) { return true; }
  if (node.val <= min || node.val >= max) { return false; }
  return checkBST(node.left, min, node.val) && checkBST(node.right, node.val, max);
};

module.exports = { isValidBST };
