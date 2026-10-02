var updateMatrix = function (mat) {
    let q = [];
    let vis = {};
    let grid = [];
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 0) {
                q.push([i, j, 0]);
            }
        }
    }
    let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    while (q.length) {
        let ele = q.shift();
        let x = ele[0];
        let y = ele[1];
        let l = ele[2];
        if ((x + "|" + y) in vis) continue;
        //console.log("av", "lev", l, x, y)
        if (mat[x][y] == 1) {
            mat[x][y] = l;
            vis[x + "|" + y] = true;
            //console.log("lev", l, x, y)
        }
        for (let [nx, ny] of dirs) {
            let newX = x + nx;
            let newY = y + ny;
            if (
                newX >= 0 &&
                newX < mat.length &&
                newY >= 0 &&
                newY < mat[0].length &&
                mat[newX][newY] === 1
            ) {
                q.push([newX, newY, l + 1]);
            }
        }
    }
    return mat;
};
