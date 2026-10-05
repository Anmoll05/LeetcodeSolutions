/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [];
    let t = graph.length - 1;
    const dfs = (node, tmp) => {
        if (node == t) {
            res.push([...tmp, t]);
            return;
        }
        tmp.push(node);
        graph[node]?.forEach((nei) => {
            dfs(nei,tmp);
        });
        tmp.pop();
        return;

    }
    dfs(0,[]);
    return res;
    
};