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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    const dfs = (node, temp, prevSum) => {
        if (!node) return;
        if (!node.left && !node.right && (prevSum + node.val) == targetSum) {
            res.push([...temp, node.val]);
            return;
        }
        dfs(node.left, [...temp, node.val], prevSum + node.val);
        dfs(node.right, [...temp, node.val], prevSum + node.val);
    };
    dfs(root,[], 0);
    return res;
};