/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let res = [];
    for (let i = 0; i < img.length; i++) {
        res.push([]);
    }
    let r = img.length;
    let c = img[0].length;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let sum = 0;
            let totalNo = 1;
            sum += img[i][j];
            if (i - 1 >= 0 && j - 1 >= 0) {
                sum += img[i - 1][j - 1];
                totalNo++;
            }
            if (i - 1 >= 0) {
                sum += img[i - 1][j];
                totalNo++;
            }
            if (i - 1 >= 0 && j + 1 < c) {
                sum += img[i - 1][j + 1];
                totalNo++;
            }
            if (j - 1 >= 0) {
                sum += img[i][j - 1];
                totalNo++;
            }
            if (j + 1 < c) {
                sum += img[i][j + 1];
                totalNo++;
            }
            if (i + 1 < r && j + 1 < c) {
                sum += img[i + 1][j + 1];
                totalNo++;
            }
            if (i + 1 < r) {
                sum += img[i + 1][j];
                totalNo++;
            }
            if (i + 1 < r && j - 1 >= 0) {
                sum += img[i + 1][j - 1];
                totalNo++;
            }
            res[i][j] = Math.floor(sum/totalNo);
            //console.log(i, j)
        }
    }
    return res;
};