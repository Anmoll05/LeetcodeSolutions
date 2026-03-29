var numberOfSubmatrices = function(grid) {
    let m = grid.length, n = grid[0].length;
    let ps = Array.from({length: m}, () => Array(n).fill(0));
    let countX = Array.from({length: m}, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let val = 0;
            if (grid[i][j] === 'X') val = 1;
            else if (grid[i][j] === 'Y') val = -1;

            ps[i][j] = val;
            if (i > 0) ps[i][j] += ps[i-1][j];
            if (j > 0) ps[i][j] += ps[i][j-1];
            if (i > 0 && j > 0) ps[i][j] -= ps[i-1][j-1];

            let x = grid[i][j] === 'X' ? 1 : 0;
            countX[i][j] = x;
            if (i > 0) countX[i][j] += countX[i-1][j];
            if (j > 0) countX[i][j] += countX[i][j-1];
            if (i > 0 && j > 0) countX[i][j] -= countX[i-1][j-1];
        }
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (ps[i][j] === 0 && countX[i][j] > 0) ans++;
        }
    }

    return ans;
};