/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let inDegree = new Array(n + 1).fill(0);
    let outDegree = new Array(n + 1).fill(0);
    if (n == 1) return 1;
    for (let [a,b] of trust) {
        outDegree[a]++;
        inDegree[b]++;
    }

    let ind = inDegree.indexOf(n-1);
    if (ind > -1) {
        if (outDegree[ind] == 0) {
            return ind;
        }
    }
    return -1;
};