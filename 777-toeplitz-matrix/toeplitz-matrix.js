/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let hash = {};
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const k = i - j;
            if (!(k in hash)) {
                hash[k] = matrix[i][j]
            } else {
                if (matrix[i][j] !== hash[k]) {
                    return false;
                }
            }
        }
    }
    return true;
};