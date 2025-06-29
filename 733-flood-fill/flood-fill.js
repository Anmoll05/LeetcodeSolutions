/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let sp = image[sr][sc];
    let visited = {};
    const dfs = (i,j) => {
        
        if (i < 0 || j < 0 || i >= image.length || j >= image[0].length || visited[i+'|'+j] || image[i][j] !== sp) {
            return;
        }
        visited[i+'|'+j] = true;
        image[i][j] = color;
        dfs(i + 1, j);
        dfs(i, j + 1);
        dfs(i - 1, j);
        dfs(i, j - 1);
    };
    dfs(sr, sc);
    return image;

};