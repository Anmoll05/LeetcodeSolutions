function maximalSquare(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const memo = Array.from({ length: rows }, () =>
        Array(cols).fill(-1)
    );

    let maxSide = 0;

    function dfs(i, j) {
        // Out of bounds
        if (i >= rows || j >= cols) return 0;

        // Memoized result
        if (memo[i][j] !== -1) return memo[i][j];

        // If current cell is 0
        if (matrix[i][j] === "0") {
            memo[i][j] = 0;
            return 0;
        }

        const right = dfs(i, j + 1);
        const down = dfs(i + 1, j);
        const diagonal = dfs(i + 1, j + 1);

        memo[i][j] = 1 + Math.min(right, down, diagonal);

        maxSide = Math.max(maxSide, memo[i][j]);

        return memo[i][j];
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dfs(i, j);
        }
    }

    return maxSide * maxSide;
}