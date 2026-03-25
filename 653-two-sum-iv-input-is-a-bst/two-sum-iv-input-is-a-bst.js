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
    const dfs = (node, ind) => {
        if (!node) return false;
        obj[node.val] = ind;
        if ((k - node.val) in obj && ind !== obj[k - node.val]) {
            return true;
        }
        return dfs(node.left, (2 * ind + 1)) || dfs(node.right, (2 * ind + 2));
    };
    return dfs(root,0);
};