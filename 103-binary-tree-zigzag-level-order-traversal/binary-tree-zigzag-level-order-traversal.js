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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = [];
    const dfs = (node, l) => {
        if (!node) return;
        if (!res[l]) {
            res[l] = [];
        }
        if (l % 2 == 0) {
          res[l].push(node.val);
        } else {
          res[l].unshift(node.val);
        }
        dfs(node.left, l + 1);
        dfs(node.right, l + 1);
        return;
    };
    dfs(root, 0);
    return res;
};