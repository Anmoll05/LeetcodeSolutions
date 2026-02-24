/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let res = null;
    let t = false;
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left)
        if(t) {
            t = false;
            res = node;
        }
        if (node == p) {
            t = true;
        }
        dfs(node.right)
    };
    dfs(root)
    return res;
};