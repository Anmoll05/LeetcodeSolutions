var minimumEffortPath = function(heights) {
    const minHeap = new MinPriorityQueue((a) => a[2]);
    let best = []
    for (let i = 0; i < heights.length; i++) {
        best[i] = [];
        for (let j = 0; j < heights[i].length; j++) {
            best[i][j] = Infinity;
        }
    };
    minHeap.enqueue([0,0,0]);
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    while (minHeap.size()) {
        let [x,y,e] = minHeap.dequeue();
        if (e > best[x][y]) continue;
        if (x == heights.length -1 && y == heights[0].length - 1) return e;
        for (let [i, j] of dirs) {
            const nx = x + i;
            const ny = y + j;
            if (nx >= 0 && nx < heights.length && ny >= 0 && ny < heights[0].length) {
                const diff = Math.abs(heights[x][y] - heights[nx][ny]);
                const newEffort = Math.max(diff, e);
                if (newEffort < best[nx][ny]) {
                    best[nx][ny] = newEffort;
                    minHeap.enqueue([nx,ny,newEffort]);
                }
            }
        }
    }
};