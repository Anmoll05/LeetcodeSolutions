/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(A, B) {
    let n = A.length;
    let result = 0;
    for (let i = -n + 1; i < n; i++) {
        for (let j = -n + 1; j < n; j++) {
            let t = 0;
            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) {
                    if (x + i >= 0 && x + i < n && y + j >= 0 && y + j < n && A[x][y] === 1 && B[x + i][y + j] === 1) {
                        t++;
                    }
                }
            }
            result = Math.max(result, t);
        }
    }
    return result;
};