/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};

    // Step 1: Build the graph
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    // Step 2: DFS to compute each query
    const dfs = (src, dst, visited) => {
        if (!(src in graph) || !(dst in graph)) return -1.0;
        if (src === dst) return 1.0;

        visited.add(src);

        for (const [neighbor, weight] of graph[src]) {
            if (visited.has(neighbor)) continue;
            const product = dfs(neighbor, dst, visited);
            if (product !== -1.0) {
                return product * weight;
            }
        }

        return -1.0;
    };

    const results = [];
    for (const [a, b] of queries) {
        const visited = new Set();
        results.push(dfs(a, b, visited));
    }

    return results;
};