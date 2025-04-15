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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    let myParent = {};
    let visited = {};
    const burnThemAll = (node) => {
        if (!node) return 0;
        if (visited[node.val]) return 0;
        visited[node.val] = true;
        const l = burnThemAll(node.left);
        const r = burnThemAll(node.right);
        const p = burnThemAll(myParent[node.val]);

        return 1 + Math.max(l,r,p);
    }
    const dfs = (node, prev) => {
        if (!node) return;
        myParent[node.val] = prev;
        dfs(node.left, node);
        dfs(node.right, node);
        return;
    }
    dfs(root, null);
    let res;
    const dfs2 = (node) => {
        if (!node) return;
        if (node.val == start) {
            res = (burnThemAll(node) - 1);
        }
        dfs2(node.left);
        dfs2(node.right);
        return;
    }
    dfs2(root);
    return res;
}
