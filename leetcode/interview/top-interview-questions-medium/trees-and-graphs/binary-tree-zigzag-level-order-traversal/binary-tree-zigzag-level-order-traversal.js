// August 13, 2020
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/787/

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
const zigzagLevelOrder = (root) => {
    if (!root) { return []; }

    const result = [[ root.val ]];
    const searchQueue = [{ ...root, level: 0 }];

    const processNode = (node, level) => {
        searchQueue.push({ ...node, level });
        level % 2 ? result[level].unshift(node.val) : result[level].push(node.val);
    };

    while (searchQueue.length) {
        const currNode = searchQueue.shift();
        const nextLevel = currNode.level + 1;
        const hasChildren = !!(currNode.left || currNode.right);

        if (hasChildren && !result[nextLevel]) { result.push([]); }
        if (currNode.left) { processNode(currNode.left, nextLevel); }
        if (currNode.right) { processNode(currNode.right, nextLevel); }
    }

    return result;
};

module.exports = { zigzagLevelOrder };