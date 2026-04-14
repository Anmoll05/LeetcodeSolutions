var divisorGame = function(n) {
    const dp = new Array(n + 1).fill(undefined);

    function solve(n) {
        // base case
        if (n === 1) return false;

        // memo check
        if (dp[n] !== undefined) return dp[n];

        // try all valid moves
        for (let x = 1; x < n; x++) {
            if (n % x === 0) {
                // if opponent loses → I win
                if (!solve(n - x)) {
                    return dp[n] = true;
                }
            }
        }

        return dp[n] = false;
    }

    return solve(n);
};