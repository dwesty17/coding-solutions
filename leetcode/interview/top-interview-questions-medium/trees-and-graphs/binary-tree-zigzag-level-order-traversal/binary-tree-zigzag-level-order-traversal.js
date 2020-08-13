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

    const result = [
        [ root.val ],
    ];

    const searchQueue = [{ ...root, level: 0 }];

    while (searchQueue.length) {
        const currNode = searchQueue.shift();
        const nextLevel = currNode.level + 1;

        if ((currNode.left || currNode.right) && !result[nextLevel]) {
            result.push([]);
        }

        if (currNode.left) {
            searchQueue.push({ ...currNode.left, level: nextLevel });
            currNode.level % 2 ? result[nextLevel].push(currNode.left.val) : result[nextLevel].unshift(currNode.left.val);
        }

        if (currNode.right) {
            searchQueue.push({ ...currNode.right, level: nextLevel });
            currNode.level % 2 ? result[nextLevel].push(currNode.right.val) : result[nextLevel].unshift(currNode.right.val);
        }
    }

    return result;
};

module.exports = { zigzagLevelOrder };