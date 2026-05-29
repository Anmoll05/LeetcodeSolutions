/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    const m = dungeon.length;
    const n = dungeon[0].length;

    const dp = Array.from({ length: m }, () =>
        Array(n).fill(0)
    );

    // princess cell
    dp[m - 1][n - 1] = Math.max(
        1,
        1 - dungeon[m - 1][n - 1]
    );

    // last column
    for (let i = m - 2; i >= 0; i--) {
        dp[i][n - 1] = Math.max(
            1,
            dp[i + 1][n - 1] - dungeon[i][n - 1]
        );
    }

    // last row
    for (let j = n - 2; j >= 0; j--) {
        dp[m - 1][j] = Math.max(
            1,
            dp[m - 1][j + 1] - dungeon[m - 1][j]
        );
    }

    // remaining cells
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {

            const minNeededFromNext = Math.min(
                dp[i + 1][j],
                dp[i][j + 1]
            );

            dp[i][j] = Math.max(
                1,
                minNeededFromNext - dungeon[i][j]
            );
        }
    }

    return dp[0][0];
};