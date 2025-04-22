var isMatch = function(s, p) {
    const n = s.length;
    const m = p.length;

    const memo = Array(n + 1).fill(null).map(() => Array(m + 1).fill(undefined));

    const match = (i, j) => {
        if (i === 0 && j === 0) return true;
        if (j === 0) return false;
        if (i === 0) return match(0, j - 1) && p[j - 1] === '*';

        if (memo[i][j] !== undefined) return memo[i][j];

        if (p[j - 1] === '*') {
            memo[i][j] = match(i - 1, j) || match(i, j - 1);
        } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
            memo[i][j] = match(i - 1, j - 1);
        } else {
            memo[i][j] = false;
        }

        return memo[i][j];
    };

    return match(n, m);
};
