/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    let binariedN = n.toString(2);
    let ind = binariedN.length - 1;
    let powers = [];
    let currPower = 0;
    for (let i = ind; i >= 0; i--) {
        if (binariedN[i] == 1) {
            powers.push(2 ** currPower);
        }
        currPower++;
    }
    let res = [];
    queries.forEach((ele) =>{
        const left = ele[0];
        const right = ele[1];
        let s = 1;
        for (let i = left; i <= right; i++) {
            s = (s * powers[i]) % 1000000007;
        }
        res.push(s);
    });
    return res;
};