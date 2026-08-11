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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function (root, target, k) {
    let res = [];
    const dfs = (node) => {
        if (!node) return;
        const sub = Math.abs(target - node.val);
        res.push([sub, node.val]);
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return res.sort((a, b) => a[0] - b[0]).slice(0, k).map(e => e[1]);
};