/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    //console.log(matrix[0][0])
    let res = true;
    for(let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[0].length-1; j++) {
            if(matrix[i][j] !== matrix[i+1][j+1]) {
                res = false;
                break;
            }
           
        } if (!res) {
                break;
            }
    }
    return res;
};