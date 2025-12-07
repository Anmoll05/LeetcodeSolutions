var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) return -1;

    const memo = new Map();

    const dfs = (idx, day) => {
        const key = idx + "," + day;
        if (memo.has(key)) return memo.get(key);

        if (day === d) {
            // Last day: take max of remaining segment
            let mx = -Infinity;
            for (let i = idx; i < n; i++) {
                mx = Math.max(mx, jobDifficulty[i]);
            }
            memo.set(key, mx);
            return mx;
        }

        let best = Infinity;
        let maxD = -Infinity;

        // IMPORTANT FIX: i <= n - (remaining days)
        for (let i = idx; i <= n - (d - day + 1); i++) {
            maxD = Math.max(maxD, jobDifficulty[i]);
            const cost = maxD + dfs(i + 1, day + 1);
            best = Math.min(best, cost);
        }

        memo.set(key, best);
        return best;
    };

    return dfs(0, 1);
};
