/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let av = {};
    let pv = {};
    let res = [];
    const dfs = (i,j,vis, prev) => {
        if (i < 0 || j < 0 || i >= heights.length || j >= heights[0].length || `${i}|${j}` in vis ||
        heights[i][j] < prev) return;
        vis[`${i}|${j}`] = true;
        dfs(i + 1, j, vis, heights[i][j]);
        dfs(i - 1, j, vis, heights[i][j]);
        dfs(i, j + 1, vis, heights[i][j]);
        dfs(i, j - 1, vis, heights[i][j]);
        return;
    }

    for (let i = 0 ; i < heights.length; i++) {
        dfs(i, 0, pv, 0);
    }
    for (let i = 0 ; i < heights[0].length; i++) {
        dfs(0, i, pv, 0);
    }
    for (let i = 0 ; i < heights.length; i++) {
        dfs(i, heights[0].length - 1, av, 0);
    }
    for (let i = 0 ; i < heights[0].length; i++) {
        dfs(heights.length - 1, i, av, 0);
    }

    for (let i = 0 ; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            if(`${i}|${j}` in av && `${i}|${j}` in pv)
                res.push([i,j])
            }
    }
    return res;
};