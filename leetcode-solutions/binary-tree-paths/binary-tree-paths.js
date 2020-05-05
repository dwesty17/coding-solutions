// May 4, 2020
// https://leetcode.com/problems/binary-tree-paths/

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
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  const result = [];
  if (!root) { return result; }

  const traverseTree = (node, path) => {
    // Base case for when we've arrived at a leaf node
    if (!node.left && !node.right) {
      return result.push(path);
    }

    // Traverse the left and right subtrees if they exist, while building path
    node.left && traverseTree(node.left, `${path}->${node.left.val}`);
    node.right && traverseTree(node.right, `${path}->${node.right.val}`);
  };

  traverseTree(root, `${root.val}`);

  return result;
};

module.exports = { binaryTreePaths };
