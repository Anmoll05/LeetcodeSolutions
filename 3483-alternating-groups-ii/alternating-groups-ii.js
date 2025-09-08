/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let modifiedArr = [...colors, ...colors.slice(0, k - 1)];

    let res = 0;
    let cur = 1;
    for (let i = 1; i < modifiedArr.length; i++) {
        if (modifiedArr[i] == modifiedArr[i - 1]) {
            cur = 1;
            continue;
        }
        cur++;
        if (cur >= k) {
            res++;
        }
    }
    return res;
};