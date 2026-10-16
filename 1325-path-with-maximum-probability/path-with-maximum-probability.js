var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(([a, b], i) => {
        adj[a].push([b, succProb[i]]);
        adj[b].push([a, succProb[i]]);
    });
    const best = new Array(n).fill(0);
    best[start_node] = 1;
    // binary max-heap of [probability, node]
    const heap = [[1, start_node]];
    const push = (item) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p][0] >= heap[i][0]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = heap[0], last = heap.pop();
        if (heap.length) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1, r = l + 1;
                let m = i;
                if (l < heap.length && heap[l][0] > heap[m][0]) m = l;
                if (r < heap.length && heap[r][0] > heap[m][0]) m = r;
                if (m === i) break;
                [heap[m], heap[i]] = [heap[i], heap[m]];
                i = m;
            }
        }
        return top;
    };
    while (heap.length) {
        const [p, node] = pop();
        if (node === end_node) return p;
        if (p < best[node]) continue;
        for (const [next, q] of adj[node]) {
            if (p * q > best[next]) {
                best[next] = p * q;
                push([best[next], next]);
            }
        }
    }
    return 0;
};