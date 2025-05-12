/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let cnt = 0;
    const dfs = (i,j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        return;
    };
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == '1') {
                dfs(i,j);
                cnt++;
            }
        }
    }
    return cnt;
};