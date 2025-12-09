/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let map = new Map();
    let uId = 2;
    const dfs = (i,j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || visited[i+"|"+j] || grid[i][j] == "0") return 0;
        visited[i+"|"+j] = true;
        grid[i][j] = uId;
        return 1 + dfs(i + 1, j) + dfs(i,j + 1) + dfs(i - 1, j) + dfs(i, j - 1);
    }

    let defMaxArea = 0;
    let visited = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == "1" && !visited[i+"|"+j]) {
                let s = dfs(i,j);
                map.set(uId, s);
                defMaxArea = Math.max(s, defMaxArea);
                uId++;
            }
        }
    }
    let maxArea = defMaxArea;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {

                let seen = new Set();
                let area = 1; // converting this 0 to 1

                // check neighbors
                if (i > 0 && grid[i-1][j] > 1) seen.add(grid[i-1][j]);
                if (i+1 < grid.length && grid[i+1][j] > 1) seen.add(grid[i+1][j]);
                if (j > 0 && grid[i][j-1] > 1) seen.add(grid[i][j-1]);
                if (j+1 < grid[0].length && grid[i][j+1] > 1) seen.add(grid[i][j+1]);

                for (let id of seen) {
                    area += map.get(id);
                }

                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea
};