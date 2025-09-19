/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const findFirstZero = (arr) => {
        let l = 0;
        let r = arr.length;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (arr[mid] == 0) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return r;
    }
    let res = [];
       for (let i = 0; i < mat.length; i++) {
        const power = findFirstZero(mat[i]);
        res.push([power, i]);
    }

    res.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    return res.slice(0, k).map(x => x[1]);
};