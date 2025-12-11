/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = {};
        const dfs = (s) => {
            if (s===0) return 1;
            if (s===1) return 1;
            if (s in dp) return dp[s];
            let two_s = dfs(s-2);
            let first_s = dfs(s - 1);
            dp[s] = two_s + first_s;
            return dp[s];
        };
        return (dfs(n));
};