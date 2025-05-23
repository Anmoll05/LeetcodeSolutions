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
var diameterOfBinaryTree = function(root) {
    let max = 0;

    const dfs = (node) => {
        if (!node) return 0;
        let l = dfs(node.left);
        let r = dfs(node.right);

        max = Math.max(max, l + r);
        return 1 + Math.max(l,r);
    };
    dfs(root);
    return (max)
};