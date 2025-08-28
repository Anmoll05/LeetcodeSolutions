/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
    let mark = 2;
    let size1 = 0;
    let size2 = 0;
    let vis = {};
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== 1) {
            return;
        }
        grid[i][j] = mark;
        mark == 2 ? size1++ : size2++;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        return;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                dfs(i, j);
                mark++;
            }
        }
    }
    let q = [];
    let goal = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (size1 > size2) {
                if (grid[i][j] == 3) {
                    q.push([i, j]);
                    vis[i + "|" + j] = true;
                    goal = 2;
                }
            } else {
                if (grid[i][j] == 2) {
                    q.push([i, j]);
                    vis[i + "|" + j] = true;
                    goal = 3;
                }
            }
        }
    }
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let bridgeLength = -1;
    //console.log(q, goal)
    while (q.length) {
        let s = q.length;
        for (let i = 0; i < s; i++) {
            let [currI, currJ] = q.shift();
            //console.log("curr", grid[currI][currJ])
            if (grid[currI][currJ] == goal) {
                return bridgeLength;
            }
            for (let [x, y] of dir) {
                const modX = currI + x;
                const modY = currJ + y;
                if (modX >= 0 && modX < grid.length && modY >= 0 && modY < grid[0].length && !vis[modX + "|" + modY]) {
                    vis[modX+"|"+modY] = true;
                    q.push([modX, modY]);
                }
            }

        }
        //console.log("q", q)
        bridgeLength++;
    }

};

// [[1, 1, 1, 1, 1],
// [1, 0, 0, 0, 1],
// [1, 0, 1, 0, 1],
// [1, 0, 0, 0, 1],
// [1, 1, 1, 1, 1]]