var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    let q = [[root, 0]];
    let maxWidth = 0;

    while (q.length) {
        let l = q.length;
        let minInd = q[0][1];
        let first = 0, last = 0;

        for (let i = 0; i < l; i++) {
            const [node, ind] = q.shift();
            let norm = ind - minInd;

            if (i === 0) first = norm;
            if (i === l - 1) last = norm;

            if (node.left)  q.push([node.left,  2 * norm + 1]);
            if (node.right) q.push([node.right, 2 * norm + 2]);
        }

        maxWidth = Math.max(maxWidth, last - first + 1);
    }

    return maxWidth;
};
