/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    // 7 - 2
    00 , 01, 02, 03
    10 , 11, 12, 13
    20 , 21, 22, 23

    let obj = {};
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if(!obj[i-j]) obj[i-j] = [];
            obj[i-j].push(mat[i][j]);
        }
    }
    for (let k in obj) {
        obj[k] = obj[k].sort((a,b) => b - a);
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if(obj[i-j].length) {
                mat[i][j] = obj[i-j].pop();
            }
        }
    }
    return (mat);
};