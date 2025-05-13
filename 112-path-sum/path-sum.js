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
 * @return {boolean}
 */
var hasPathSum = function(root, target) {
    let res = false;
    const dfs = (node, s) => {
        if (!node) return 0;
        
        if (!node.left && !node.right) {
            if (s + node.val == target) res = true;
            return;
        }
        dfs(node.left, s + node.val);
        dfs(node.right, s + node.val);
    };
    dfs(root,0);
    return (res);
};