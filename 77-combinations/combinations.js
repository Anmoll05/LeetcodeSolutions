/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    const backtrack = (ind,arr) => {
        if (ind > n + 1) return;
        if (arr.length == k) {
            res.push(arr);
            return;
        }
        backtrack(ind + 1, [...arr,ind]);
        backtrack(ind + 1, arr);
    };
    backtrack(1,[]);
    return res;
};