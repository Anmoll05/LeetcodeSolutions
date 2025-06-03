var largestPathValue = function(colors, edges) {
    const n = colors.length;
    const adj = Array.from({ length: n }, () => []);
    const indegree = Array(n).fill(0);

    for (let [u, v] of edges) {
        adj[u].push(v);
        indegree[v]++;
    }

    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    const colorFreq = Array.from({ length: n }, () => Array(26).fill(0));
    let processed = 0;
    let maxColorValue = 0;

    while (queue.length > 0) {
        const node = queue.shift();
        const colorIdx = colors.charCodeAt(node) - 97;
        colorFreq[node][colorIdx]++;
        maxColorValue = Math.max(maxColorValue, colorFreq[node][colorIdx]);

        for (let nei of adj[node]) {
            for (let c = 0; c < 26; c++) {
                // Propagate max value, don't add!
                colorFreq[nei][c] = Math.max(colorFreq[nei][c], colorFreq[node][c]);
            }

            indegree[nei]--;
            if (indegree[nei] === 0) {
                queue.push(nei);
            }
        }

        processed++;
    }

    return processed === n ? maxColorValue : -1;
};
