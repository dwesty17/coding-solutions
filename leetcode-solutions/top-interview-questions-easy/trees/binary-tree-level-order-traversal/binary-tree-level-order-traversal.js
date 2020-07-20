// June 23, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) { return []; }
  return createLevelOrderList(root);
};

const createLevelOrderList = (node, level = 0, result = []) => {
  if (!result[level]) {
    result[level] = [];
  }

  result[level].push(node.val);

  if (node.left) { createLevelOrderList(node.left, level + 1, result) }
  if (node.right) { createLevelOrderList(node.right, level + 1, result) }

  return result;
};

module.exports = { levelOrder };
