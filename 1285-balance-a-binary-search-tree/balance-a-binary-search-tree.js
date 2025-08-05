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
var balanceBST = function (root) {
    let arr = [];
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }
    dfs(root);


    const buildTree = (temp) => {
        if (!temp.length) return null;
        let rootIndex = null;
        if (temp.length == 1) {
            rootIndex = 0;
        }
        else if (temp.length % 2 == 0) {
            rootIndex = temp.length / 2
        } else {
            rootIndex = Math.floor(temp.length / 2);
        }
        const rootNode = new TreeNode(temp[rootIndex]);
        rootNode.left = buildTree(temp.slice(0, rootIndex));
        rootNode.right = buildTree(temp.slice(rootIndex + 1));
        return rootNode;
    };
    return (buildTree(arr));
};