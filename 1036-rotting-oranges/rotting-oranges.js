var orangesRotting = function(grid) {
    let q = [];
    const rows = grid.length, cols = grid[0].length;

    // Directions for BFS
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    // Visited tracking
    const vis = Array.from({ length: rows }, () => Array(cols).fill(false));

    // Push all rotten oranges to queue
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j]);
                vis[i][j] = true;
            }
        }
    }

    let time = -1; // start from -1 to fix the off-by-one issue

    while (q.length > 0) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = q.shift();

            for (let [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                // Check bounds and if not visited and is fresh orange
                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    !vis[nr][nc] &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;       // rot the orange
                    vis[nr][nc] = true;
                    q.push([nr, nc]);
                }
            }
        }
        time++; // only increment if at least one layer was processed
    }

    // Check if any fresh orange left
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) return -1;
        }
    }

    return time < 0 ? 0 : time;
};
