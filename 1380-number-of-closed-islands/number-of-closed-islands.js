/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let n = grid.length - 1;
    let m = grid[0].length - 1;
    let res = 0;
    const fillWithFlood = (i, j) => {
        if (i < 0 || j < 0 || i > n || j > m || grid[i][j] !== 0) {
            return;
        }
        grid[i][j] = 1;
        fillWithFlood(i + 1, j);
        fillWithFlood(i - 1, j);
        fillWithFlood(i, j + 1);
        fillWithFlood(i, j - 1);
        return;
    };
    //flood-fill
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i == 0 || j == 0 || i == n || j == m) {
                if (grid[i][j] == 0) {
                    fillWithFlood(i, j);
                }
            }
        }
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (grid[i][j] == 0) {
                fillWithFlood(i, j);
                res++;
            }
        }
    }
    return res;
};