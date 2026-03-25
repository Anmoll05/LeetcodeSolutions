/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
    let vis = {};
    let myParent = {};
    const dfs = (i, j, c, pi, pj) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== grid[pi][pj]) {
            return false;
        }
        if ((i+"|"+j) in vis) {
            if (myParent[pi+"|"+pj] == i+"|"+j) {
                return false;
            }
           
                return true;
        }
        myParent[i + "|" + j] = pi + "|" + pj;
        vis[i + "|" + j] = true;
        return dfs(i + 1, j, c + 1, i, j) ||
            dfs(i, j + 1, c + 1, i, j) ||
            dfs(i - 1, j, c, i, j) ||
            dfs(i, j - 1, c + 1, i, j);
    };
    let res = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!((i + "|" + j) in vis)) {
                res = res || dfs(i, j, 1, i, j)
                if (res) {
                    return true;
                }
            }
        }
    }
    return res;
};
//    [["c","a","d"],
    // ["a","a","a"],
    // ["a","a","d"],
    // ["a","c","d"],
    // ["a","b","c"]]