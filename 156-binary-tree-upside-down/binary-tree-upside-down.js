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
var upsideDownBinaryTree = function(root) {
    // left ko root bnana h
    // root ko right bnana h
    // right ko left bnana h
    let lastNode = false;
    let rev = null;
    const dfs = (node) => {
        if (!node) {
           return;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (!left) {
            if(!lastNode) {
                rev = node;
                lastNode = true;
            }
        }
        if (left) {
        left.left = node.right;
        left.right = node;
        node.left = null;
        node.right = null;
        //console.log("left tree sent back node", newRoot)
        return left.right;
        }
        return node;
        
    }
    dfs(root);
    return rev;
};