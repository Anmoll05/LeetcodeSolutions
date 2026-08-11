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
 * @return {number}
 */
var closestValue = function(root, target) {
    let res = Infinity;
    let curMin = Infinity;
    const dfs = (node) => {
        if (!node) return;
        const sub = Math.abs(target - node.val);
        if (sub < curMin) {
            res = node.val;
            curMin = sub;
        } else if (sub == curMin) {
            res = Math.min(res, node.val)
        }
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root)
    return res;
};