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
var countUnivalSubtrees = function(root) {
    
    let res = 0;
    const dfs = (node) => {
        if(!node) return {val: -1001, is: true};
        let l = dfs(node.left);
        let r = dfs(node.right);
        if (l.val == r.val && r.val == -1001) {
            res++;
            return {val: node.val, is: true}
        }
        if ((l.val == r.val && r.val == node.val && l.is && r.is)) {
            res++;
            return {val: node.val, is: true}
        }
        if (l.val == node.val && (r.val == -1001) && l.is) {
             res++;
            return {val: node.val, is: true}
        }
         if (l.val== -1001 && (r.val == node.val) && r.is) {
             res++;
            return {val: node.val, is: true}
        }
        return {val: node.val, is: false};
    }
    dfs(root);
    return res;
};