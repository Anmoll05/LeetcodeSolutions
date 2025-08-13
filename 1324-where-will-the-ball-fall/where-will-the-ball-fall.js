/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let res = [];
    const dfs = (i,j) => {
        if (i == grid.length) {
            return j;
        }
        if (i < 0 || j < 0 || i > grid.length || j >= grid[0].length) {
            return Infinity;
        }
        if (j == 0 && grid[i][j] == -1) return Infinity;
        if (j == grid[0].length - 1 && grid[i][j] == 1) return Infinity;
        let f = Infinity;
        let s = Infinity;
        if(grid[i][j] == 1) {
            if (grid[i][j + 1] == 1) {
                f = dfs(i + 1,j + 1);
            } else {
                f = Infinity;
            }
        } else {
             if (grid[i][j - 1] == -1) {
                f = dfs(i + 1,j - 1);
            } else {
                s = Infinity;
            }
        }
        return Math.min(f,s);
    };
    for (let i = 0; i < grid[0].length; i++) {
        const r = dfs(0,i);
        res.push(r == Infinity ? -1 : r);
    }
    return res;
};