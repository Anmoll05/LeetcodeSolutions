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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let obj = {};
    let res = false;
    const dfs = (node) => {
        if (!node) return;
        if ((k - node.val) in obj) {
            res = true;
            return;
        }
        obj[node.val] = true;
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return res;
};