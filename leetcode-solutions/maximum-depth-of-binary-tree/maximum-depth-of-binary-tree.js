// June 20, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

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
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) { return 0; }

  let result = 0;
  let curr = {node: root, depth: 1};

  const queue = [];

  while (curr) {
    result = curr.depth;

    if (curr.node.left) {
      queue.push({
        node: curr.node.left,
        depth: curr.depth + 1,
      });
    }

    if (curr.node.right) {
      queue.push({
        node: curr.node.right,
        depth: curr.depth + 1,
      });
    }

    curr = queue.shift();
  }

  return result;
};

module.exports = {maxDepth};
