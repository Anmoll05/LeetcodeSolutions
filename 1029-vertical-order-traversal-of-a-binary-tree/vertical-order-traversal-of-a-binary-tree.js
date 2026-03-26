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
var verticalTraversal = function(root) {
    let res = [];
    let obj = {};
    const dfs = (node,l,r) => {
        if(!node) return;
        if(!(r in obj)) {
            obj[r] = []
        }
        obj[r].push([node.val,l]);
        dfs(node.left, l + 1,r - 1);
        dfs(node.right, l + 1, r + 1);
        return;
    };
    dfs(root, 0 , 0);
    for (let k in obj) {
        obj[k] = obj[k].sort((a,b) => {
            if(a[1] == b[1]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        })
    }
    for (let k in obj) {
        obj[k] = obj[k].map(e => e[0])
    }
    const sortedVals = Object.keys(obj).sort((a,b) => a - b);
    for (let i = 0; i < sortedVals.length; i++) {
        res.push(obj[sortedVals[i]])
    }
    return res;
};