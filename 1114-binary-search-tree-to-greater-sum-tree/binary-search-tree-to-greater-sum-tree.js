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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let inorder = [];
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        inorder.push(node.val);
        dfs(node.right);
    };
    dfs(root);
    let hash = {};
    let suff = [];
    for (let i = inorder.length - 1; i >=0; i--) {
        suff[i] = (suff[i + 1] || 0) + inorder[i];
        hash[inorder[i]] = suff[i];
    }
    //console.log('hash', hash, 'suff', suff, 'inorder', inorder)
    const dfsA = (node) => {
        if (!node) return;
        dfsA(node.left);
        node.val = hash[node.val]
        dfsA(node.right);
    };
    dfsA(root)
    return root;
};