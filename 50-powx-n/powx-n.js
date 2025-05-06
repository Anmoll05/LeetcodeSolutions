/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if ( n === 0) return 1;
    let p = Math.abs(n);
    let res = p % 2 == 0 ? myPow(x * x, p / 2) : myPow(x * x, (p - 1) / 2) * x;
    return n < 0 ? 1/res : res
};
// 1
// res = 2 , n 10
// res = 2 * 2
/// res 4

// 2
// res = 4 * 2
// res = 8

// 3 , 16

// 4 , 32