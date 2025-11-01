/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let rightySmall = n;
    let leftyBig = 0;
    for (let i = 0; i < left.length; i++) {
        leftyBig = Math.max(leftyBig, left[i])
    }
    for (let i = 0; i < right.length; i++) {
        rightySmall = Math.min(rightySmall, right[i])
    }
    return Math.max(n - rightySmall, leftyBig);
};