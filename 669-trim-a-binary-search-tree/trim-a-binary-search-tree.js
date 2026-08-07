var trimBST = function(root, low, high) {
    let dummy = { right: root };

    const dfs = (node, parent, isLeft) => {
        if (!node) return;

        if (node.val < low) {
            // node is invalid, so connect parent directly to node.right
            if (isLeft) {
                parent.left = node.right;
            } else {
                parent.right = node.right;
            }

            dfs(node.right, parent, isLeft);
        }
        else if (node.val > high) {
            // node is invalid, so connect parent directly to node.left
            if (isLeft) {
                parent.left = node.left;
            } else {
                parent.right = node.left;
            }

            dfs(node.left, parent, isLeft);
        }
        else {
            // node is valid
            dfs(node.left, node, true);
            dfs(node.right, node, false);
        }
    };

    dfs(root, dummy, false);

    return dummy.right;
};