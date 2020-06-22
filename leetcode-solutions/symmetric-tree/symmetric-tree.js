// June 22, 2020
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/627/

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
 *
 * This is the recursive solution to this problem.
 *
 */
const isSymmetric = (root) => {
  if (!root) { return true; }

  return compareTrees(root.left, root.right);
};

const compareTrees = (nodeOnLeftTree, nodeOnRightTree) => {
  if (!nodeOnLeftTree && !nodeOnRightTree) {
    return true;
  } else if (!nodeOnLeftTree || !nodeOnRightTree) {
    return false;
  } else if (nodeOnLeftTree.val !== nodeOnRightTree.val) {
    return false;
  }

  return (
    compareTrees(nodeOnLeftTree.left, nodeOnRightTree.right)
    && compareTrees(nodeOnLeftTree.right, nodeOnRightTree.left)
  );
};

module.exports = { isSymmetric };
