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
var longestConsecutive = function(root) {
    let max = 1;
    const dfs = (node, prev, chain) => {
        if (!node) return;
        let curr = 1;
        if (prev == node.val - 1) {
            curr = chain + 1;
        }
        max = Math.max(max, curr);
        dfs(node.left, node.val, curr)
        dfs(node.right, node.val, curr);
    }
    dfs(root, -300005,1);
    return max;
};