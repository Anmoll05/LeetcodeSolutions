/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let su = 1;
    let max = 1;
    for (let i = 1; i < s.length; i++) {
        if((s[i] != s[i-1])) su = 1;
        else su += 1;
        max = Math.max(max,su)
    }
    return max;
};