var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let row = m - 1; // start from bottom-left
    let col = 0;
    let count = 0;

    while (row >= 0 && col < n) {
        if (grid[row][col] < 0) {
            count += (n - col);  // rest of the row is negative
            row--;               // move up
        } else {
            col++;               // move right
        }
    }
    return count;
};
