/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    let adj = {};
    for (let [a,b] of edges) {
        if(!adj[a]) adj[a] = [];
        adj[a].push(b)
        if(!adj[b]) adj[b] = [];
        adj[b].push(a)
    }
    let inDegree = new Array(n).fill(0);
    for (let [a,b] of edges) {
        ++inDegree[a];
        ++inDegree[b];
    }
    let q = [];
    let min = Math.min(...inDegree);
    for (let i = 0 ; i < inDegree.length; i++) {
        let c = inDegree[i]
        if (c == min) {
            q.push(i)
        }
    }
    //console.log(inDegree, adj)
    let lastProcessed = [];
    while (q.length) {
        let s = q.length;
        lastProcessed = [];
        for (let i = 0 ; i < s; i++) {
       
        let n = q.shift();
        lastProcessed.push(n)
        adj[n]?.forEach((n, _ind) => {
            --inDegree[n];
            if(inDegree[n] == 1) q.push(n);
        });
        }
    }
    return lastProcessed;
};