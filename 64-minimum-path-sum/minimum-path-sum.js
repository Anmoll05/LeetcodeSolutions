var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    const dfs = (i, j) => {
        if (i < 0 || j < 0) return Infinity;
        if (i === 0 && j === 0) return grid[0][0];
        if (memo[i][j] !== -1) return memo[i][j];

        const up = dfs(i - 1, j);
        const left = dfs(i, j - 1);

        memo[i][j] = grid[i][j] + Math.min(up, left);
        return memo[i][j];
    };

    return dfs(m - 1, n - 1);
};
