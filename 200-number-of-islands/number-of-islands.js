/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (i,j) => {
        console.log(i,j)
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == "0") return;
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i,j + 1);
        dfs(i, j - 1);
        return;
    };
    let ct = 0;
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == "1") {
                dfs(i,j);
                ct++;
            }
        }
    }
    return ct;
};