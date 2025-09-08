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
    if (!root) return [];
    let res = [];
    let l = 0;
    let q = [root];
    while (q.length) {
        let s = q.length;
        for (let i = 0; i < s; i++) {
            let node = q.shift();
             if (!res[l]) res[l] = [];
            if (l % 2 == 0) {
                res[l].push(node?.val);
            } else {
                res[l].unshift(node?.val);
            }
            if(node?.left) {
                q.push(node?.left);
            }
            if(node?.right) {
                q.push(node?.right);
            }
        }
        l++;
    }
    return res;
};