var lowestCommonAncestor = function(p, q) {
    let set = new Set();
    let lca = null;

    const dfs = (node) => {
        if (!node) return;

        if (set.has(node)) {
            lca = node;
            return;
        }

        set.add(node);
        dfs(node.parent);
    };

    dfs(p);
    dfs(q);

    return lca;
};