/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    let startEle = null;
    let adj = {};
    let count = {};
    let visited = {};
    for (let [a, b] of adjacentPairs) {
        if (!adj[a]) adj[a] = [];
        adj[a].push(b)
        if (!adj[b]) adj[b] = [];
        adj[b].push(a)
        count[a] = ++count[a] || 1;
        count[b] = ++count[b] || 1;
    }
    for (let k in count) {
        if (count[k] == 1) {
            startEle = k;
            break;
        }
    }
    let res = [];
    
    const dfs = (node) => {
        if (visited[node]) {
            return;
        }
        res.push(parseInt(node));
        visited[node] = true;
        adj[node]?.forEach((e) => {
            if (!(e in visited)) {
                dfs(e)
            }
        });
    }
    dfs(startEle);
    return res;
};