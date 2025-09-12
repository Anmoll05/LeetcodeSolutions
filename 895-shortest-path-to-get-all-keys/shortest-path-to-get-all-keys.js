/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    const m = grid.length, n = grid[0].length;
    let start = null, totalKeys = 0;

    // find start and total number of keys
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let ch = grid[i][j];
            if (ch === '@') start = [i, j];
            if (ch >= 'a' && ch <= 'f') {
                totalKeys = Math.max(totalKeys, ch.charCodeAt(0) - 97 + 1);
            }
        }
    }

    const allKeysMask = (1 << totalKeys) - 1;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    let queue = [[start[0], start[1], 0]];
    let visited = new Set([`${start[0]}|${start[1]}|0`]);
    let steps = 0;

    while (queue.length) {
        let size = queue.length;
        for (let s = 0; s < size; s++) {
            let [x, y, mask] = queue.shift();

            // if collected all keys
            if (mask === allKeysMask) return steps;

            for (let [dx, dy] of dirs) {
                let nx = x + dx, ny = y + dy;
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                let cell = grid[nx][ny];

                if (cell === '#') continue;

                let newMask = mask;

                if (cell >= 'a' && cell <= 'f') {
                    // pick up key
                    newMask |= (1 << (cell.charCodeAt(0) - 97));
                }

                if (cell >= 'A' && cell <= 'F') {
                    // lock but don't have the key
                    if ((mask & (1 << (cell.charCodeAt(0) - 65))) === 0) continue;
                }

                let state = `${nx}|${ny}|${newMask}`;
                if (!visited.has(state)) {
                    visited.add(state);
                    queue.push([nx, ny, newMask]);
                }
            }
        }
        steps++;
    }
    return -1;
};
