/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length;
    let q = [];
    if(grid[0][0] == 1) return -1;
    q.push([[0,0], 1]);
    let vis = {};
    let dir = [
        [-1,0], [1,0], [0,-1], [0,1], [-1,-1],[1,1], [-1,1], [1,-1]
    ];
    while(q.length) {
        let node = q.shift();
        let cx = node[0][0];
        let cy = node[0][1];
        let level = node[1];
        if (cx < 0 || cy < 0 || cx >= grid.length || cy >= grid[0].length || grid[cx][cy] == 1) continue;
        if (cx == n - 1 && cy == n - 1) {
            return level;
            break;
        }
        for (let i = 0; i < dir.length; i++) {
            let nx = cx + dir[i][0];
            let ny = cy + dir[i][1];

            if(!(nx+"|"+ny in vis)) {
                vis[nx+"|"+ny] = true;
                q.push([[nx,ny], level + 1]);
            }
        }
    }
    return -1;
};