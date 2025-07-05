var updateMatrix = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let queue = [];
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    // Step 1: Push all 0s into the queue
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                visited[i][j] = true;
            }
        }
    }
    
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // Step 2: BFS
    while (queue.length > 0) {
        let [x, y] = queue.shift();
        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newY >= 0 && newX < rows && newY < cols && !visited[newX][newY]) {
                mat[newX][newY] = mat[x][y] + 1;
                visited[newX][newY] = true;
                queue.push([newX, newY]);
            }
        }
    }

    return mat;
};
