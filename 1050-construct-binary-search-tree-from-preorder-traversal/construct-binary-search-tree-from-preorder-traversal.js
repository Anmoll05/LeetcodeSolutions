/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    // [8,5,1,7,10,12]
    //  0, 1,2,3,4,5
    const dfs = (arr) => {
        if(arr.length == 0) return null;
        let node = new TreeNode(arr.shift());
        let lt = [];
        let i = 0;
        while (arr.length && arr[0] < node.val) {
            lt.push(arr.shift());
        }
        let rt = [];
        
        while (arr.length && arr[0] > node.val) {
            rt.push(arr.shift());
        }
        //console.log('lt', lt, 'rt', rt)
        node.left = dfs(lt);
        node.right = dfs(rt);

        return node;
    }
    return (dfs(preorder));
};