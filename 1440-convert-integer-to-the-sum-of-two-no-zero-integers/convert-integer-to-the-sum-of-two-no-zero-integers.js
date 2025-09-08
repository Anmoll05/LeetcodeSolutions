/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    //const num = n - 1;
    let res = []
    const isNonZero = (num) => num.toString().indexOf('0') > -1;
    for (let i = 1; i < n; i++) {
        let a = i;
        let b = n - i;
        if (!isNonZero(a) && 
        !isNonZero(b)) {
            res = [a,b];
            break;
        }
    }
    return res;
};