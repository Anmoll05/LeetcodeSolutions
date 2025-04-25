var findCircleNum = function(isConnected) {
    let parent = [];
    let rank = [];
    for (let i = 0; i < isConnected.length; i++) {
        parent[i] = i;
        rank[i] = 0;
    };
    const findParent = (node) => {
        if(node == parent[node]) return node;
        parent[node] = findParent(parent[node]);
        return parent[node];
    };

    const makeMeJoin = (u,v) => {
        //console.log(u, v)
        const uP = findParent(u);
        const vP = findParent(v);

        if(uP == vP) return;
        if(rank[uP] > rank[vP]) {
            parent[vP] = uP;
            rank[uP]++;
        } else {
            parent[uP] = vP;
            rank[vP]++;
        }
    };
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0 ; j < isConnected[0].length; j++) {
            if(isConnected[i][j] == 1) {
                makeMeJoin(i,j);
            }
        }
    }
    let res = {};
    console.log(parent)
    for (let i = 0; i < parent.length; i++) {
        const p = findParent(i); // get actual parent
        
        res[p] = 1;
    }

    return Object.keys(res).length;
};
