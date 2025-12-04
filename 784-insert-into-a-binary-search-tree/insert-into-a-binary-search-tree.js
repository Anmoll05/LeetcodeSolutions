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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val);
    const dfs = (node) => {
        if (!node) return;
        if (!node.left && !node.right) {
            if(val < node.val) {
                node.left = new TreeNode(val)
            } else {
                node.right = new TreeNode(val);
            }
            return;
        }
        if(node.val < val) {
            if (node.right) dfs(node.right);
            else {
                node.right = new TreeNode(val);
                return;
            }
        }
        if(node.val > val) {
            if (node.left) dfs(node.left);
            else {
                node.left = new TreeNode(val);
                return;
            }
        }
    }
    dfs(root);
    return root
};