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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
       if(!node) return;
       if(node == p || node == q) return node;
       let l = dfs(node.left);
       let r = dfs(node.right);
       if (l && r) return node;
       return l || r;
    }
    return dfs(root);
};