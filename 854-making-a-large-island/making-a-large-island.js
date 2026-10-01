/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let curId = 2;
    let max = 1;
    const dfs = (i,j) => {
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0 || grid[i][j] == curId) return;
        grid[i][j] = curId;
        sizeMap[curId] = ++sizeMap[curId] || 1;
        max = Math.max(max, sizeMap[curId])
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i,j + 1);
        dfs(i, j - 1);
        return;
    };
    let sizeMap  = {};
    let len;
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) {
                dfs(i,j);
                curId++;
            }
        }
    }
    
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 0) {
                let nei = {};
                if (i > 0) {
                    if (grid[i - 1][j] !== 0) {
                        nei[grid[i - 1][j]] = true;
                    }
                }
                if (j > 0) {
                    if (grid[i][j - 1] !== 0) {
                        nei[grid[i][j - 1]] = true;
                    }
                }
                if (j < grid[0].length - 1) {
                    if (grid[i][j + 1] !== 0) {
                        nei[grid[i][j + 1]] = true;
                    }
                }
                if (i < grid.length - 1) {
                    if (grid[i + 1][j] !== 0) {
                        nei[grid[i + 1][j]] = true;
                    }
                }
                let keys = Object.keys(nei);
                //console.log('keys', keys, sizeMap[keys])
                let len = 1;
                for (let i = 0 ; i < keys.length; i++) {
                    len += sizeMap[keys[i]]
                }
                max = Math.max(max, len);
            }
        }
    }
    return max;
};