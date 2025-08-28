/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        grid.push([])
    };
    let up = 0;
    let right = n - 1;
    let down = n - 1;
    let left = 0;
    let c = 1;
    let totalEle = n * n;
    while (c <= (n*n)) {
        //console.log(c)
        for (let i = left; i <= right && c <= totalEle; i++) {
            grid[up][i] = c++;
        }
        up++;
        for (let i = up; i <= down && c <= totalEle; i++) {
            grid[i][right] = c++;
        }
        right--;
        for (let i = right; i >= left && c <= totalEle; i--) {
            grid[down][i] = c++;
        }
        down--;
        for (let i = down; i >= up && c <= totalEle; i--) {
            grid[i][left] = c++;
        }
        left++;
    }
    return grid;
};