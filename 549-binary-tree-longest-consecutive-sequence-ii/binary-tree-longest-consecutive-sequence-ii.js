const longestConsecutive = root => {
    let res = 0;

    const dfs = node => {
        if (node === null)
            return [0, 0];

        let inc = 1;
        let dec = 1;

        if (node.left) {
            const left = dfs(node.left);
            if (node.val === node.left.val + 1)
                inc = Math.max(inc, left[0] + 1);
            else if (node.val === node.left.val - 1)
                dec = Math.max(dec, left[1] + 1);
        }

        if (node.right) {
            const right = dfs(node.right);
            if (node.val === node.right.val + 1)
                inc = Math.max(inc, right[0] + 1);
            else if (node.val === node.right.val - 1)
                dec = Math.max(dec, right[1] + 1);
        }

        res = Math.max(res, inc + dec - 1);
        return [inc, dec];
    };

    dfs(root);
    return res;
};