/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    let res = [];
    let vis = {};
    const makeResult = (node, l) => {
        if (!node) return;
        if(vis[node.val]) return;
        if (l > k) return;
        vis[node.val] = true;
        if (l == k) res.push(node.val);
        makeResult(node.left, l + 1);
        makeResult(node.right, l + 1);
        makeResult(myParent[node.val.toString()], l + 1);
    }
    let myParent = {};
    const dfs = (node, prev) => {
        if (!node) return;
        myParent[node.val] = prev;
        if (node.val == target.val) {
            makeResult(node, 0);
            return;
        }
        dfs(node.left, node);
        dfs(node.right, node);
    }
    dfs(root, null);
    return res
};